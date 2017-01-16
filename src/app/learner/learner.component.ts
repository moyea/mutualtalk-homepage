import {Component, OnInit, AfterViewInit} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {showAlert} from "../app.utils";
import {environment} from "../../environments/environment";
import {DataService} from "../services/data.service";
@Component({
  selector: 'mt-learner',
  templateUrl: './learner.component.html',
  styleUrls: ['./learner.component.css'],
})

export class LearnerComponent implements OnInit,AfterViewInit {
  ngAfterViewInit(): void {
    // window.onscroll = function (e) {
    //   console.log(e);
    // };
  }

  private verifyCodeUrl = environment.endPoint + environment.sendSmsUrl;
  private reserveInfoUrl = environment.endPoint + environment.reserveUrl;
  private verifyCode = '';
  private disabledGainCodeBtn = false;
  private gainCodeBtnText = '获取验证码';
  private timer = 60;

  constructor(private http: Http, private data: DataService) {
  }

  cards = this.data.cards.learner;

  ngOnInit() {
  }

  inputSelectKeyDown(e) {
    e.returnValue = false;
  }

  reserveInfo: any = {};

  getVerifyCode() {
    let mobile = this.reserveInfo.mobile;
    if (!mobile || mobile.length < 1) {
      return showAlert('error', '无效的手机号码！');
    }
    if (!(/^1[34578]\d{9}$/.test(mobile))) {
      return showAlert('error', '手机号码格式不正确！');
    }
    this.timer = 60;
    this.disabledGainCodeBtn = true;
    let timerId = setInterval(() => {
      if (this.timer == 0) {
        this.gainCodeBtnText = '获取验证码';
        this.disabledGainCodeBtn = false;
        clearInterval(timerId);
      } else {
        this.gainCodeBtnText = '重新发送' + this.timer + 's';
      }
      this.timer--;
    }, 1000);
    let url = this.verifyCodeUrl + "?mobile=" + this.reserveInfo.mobile;
    this.http.get(url)
      .toPromise()
      .then(resp => {
        let data = resp.json();
        let alertType = data.code == 200 ? 'success' : 'error';
        showAlert(alertType, data.msg);
        this.verifyCode = data.result
      });
  }

  reserved() {
    let mobile = this.reserveInfo.mobile || '';
    let name = this.reserveInfo.username || '';
    let category = this.reserveInfo.courseLabel || '';
    let code = this.reserveInfo.verifyCode || '';
    if (name.length < 1) {
      return showAlert('error', '无效的用户名');
    }
    if (mobile.length < 1) {
      return showAlert('error', '无效的手机号码！');
    }
    if (!(/^1[34578]\d{9}$/.test(mobile))) {
      return showAlert('error', '手机号码格式不正确！');
    }

    if (code.length < 1) {
      return showAlert('error', '请先获取验证码');
    }
    if (this.verifyCode != code) {
      return showAlert('error', '无效的验证码');
    }
    if (category.length < 1) {
      return showAlert('error', '无效的课程类别');
    }
    let url = this.reserveInfoUrl + "?mobile=" + mobile + '&name=' + name +
      "&category=" + category;
    this.http.get(url)
      .toPromise()
      .then(resp => {
        let data = resp.json();
        let alertType = data.code == 200 ? 'success' : 'error';
        showAlert(alertType, data.msg);
      });
  }
}
