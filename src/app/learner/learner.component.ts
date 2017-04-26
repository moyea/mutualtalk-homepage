import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {showAlert, scrollToDom} from '../app.utils';
import {environment} from '../../environments/environment';
import {DataService} from '../services/data.service';
@Component({
  selector: 'mt-learner',
  templateUrl: './learner.component.html',
  styleUrls: ['./learner.component.css'],
})


export class LearnerComponent implements OnInit {

  private verifyCodeUrl = environment.endPoint + environment.sendSmsUrl;
  private reserveInfoUrl = environment.endPoint + environment.reserveUrl;
  private verifyCode = '';

  disabledGainCodeBtn = false;
  gainCodeBtnText = '获取验证码';
  private timer = 60;

  scrollTo = scrollToDom;
  cards = this.data.cards.learner;
  reserveInfo: any = {};

  constructor(private http: Http, private data: DataService) {
  }

  ngOnInit() {
  }

  inputSelectKeyDown(e) {
    e.returnValue = false;
  }


  getVerifyCode() {
    const mobile = this.reserveInfo.mobile;
    if (!mobile || mobile.length < 1) {
      return showAlert('error', '无效的手机号码！');
    }
    if (!(/^1[34578]\d{9}$/.test(mobile))) {
      return showAlert('error', '手机号码格式不正确！');
    }
    this.timer = 60;
    this.disabledGainCodeBtn = true;

    const timerId = setInterval(() => {
      if (this.timer === 0) {
        this.gainCodeBtnText = '获取验证码';
        this.disabledGainCodeBtn = false;
        clearInterval(timerId);
      } else {
        this.gainCodeBtnText = '重新发送' + this.timer + 's';
      }
      this.timer--;
    }, 1000);

    const url = this.verifyCodeUrl + '?mobile=' + this.reserveInfo.mobile;
    this.http.get(url)
      .toPromise()
      .then(resp => {
        const data = resp.json();
        if (data.code === 0) {
          showAlert('success', '验证码已发送到你的手机，请注意查收');
        } else {
          showAlert('error', '验证码发送失败');
        }
      });
  }

  reserved() {
    const mobile = this.reserveInfo.mobile || '';
    const name = this.reserveInfo.username || '';
    const category = this.reserveInfo.courseLabel || '';
    const code = this.reserveInfo.verifyCode || '';
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
    if (this.verifyCode !== code) {
      return showAlert('error', '无效的验证码');
    }
    if (category.length < 1) {
      return showAlert('error', '无效的课程类别');
    }
    const url = this.reserveInfoUrl + '?mobile=' + mobile + '&name=' + name +
      '&category=' + category;
    this.http.get(url)
      .toPromise()
      .then(resp => {
        const data = resp.json();
        if (data.code === 0) {
          showAlert('success', '我们已经收到了你的预约，会尽快处理');
        } else {
          showAlert('error', '预约失败，请稍后重试');
        }
      });
  }
}
