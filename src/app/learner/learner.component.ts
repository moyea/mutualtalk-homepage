import {Component, OnInit, AfterViewInit} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'mt-learner',
  templateUrl: './learner.component.html',
  styleUrls: ['./learner.component.css'],
})
export class LearnerComponent implements OnInit,AfterViewInit {
  ngAfterViewInit(): void {
    window.onscroll = function (e) {
      console.log(e);
    };
  }

  private verifyCodeUrl = "";

  constructor(private http: Http) {
  }

  cards = [{
    no: '01',
    intro: '木言拥有专属于您的名师名课，内容覆盖经典英语、出国留学、雅思' +
    '托福、职场商务、少儿英语、零基础、兴趣爱好等热点知识的系列专题。'
  }, {
    no: '02',
    intro: '一对一中外教将以全部的专注力与您互动练习，确保您有超过一半的' +
    '开口时间，快速建立英语语感，每节课25分钟，短时高频，更见效果。'
  }, {
    no: '03',
    intro: '“课程套餐贵，门槛高，不喜欢老师”，通通不用愁，木言支持单节' +
    '课程购买，不喜欢的老师任性换，灵活择课。'
  }, {
    no: '04',
    intro: '真实的课堂互动，可以随时随地与老师进行学习交流；大大降低了' +
    '学习成本。'
  }];

  ngOnInit() {
  }

  inputSelectKeyDown(e) {
    e.returnValue = false;
  }

  scrollTo(key) {
    let offsetTop = document.getElementById(key).getBoundingClientRect().top;
    window.scrollTo(0, offsetTop);
  }

  reserveInfo: any = {};

  getVerifyCode() {
    console.log(this.reserveInfo.mobile);
    let url = this.verifyCodeUrl + "?mobile=" + this.reserveInfo.mobile;
    this.http.get(url)
      .toPromise()
      .then(resp => console.log(resp.json().data));
  }

  handleError(err) {
    console.log(err);
  }

  reserved() {
    console.log(this.reserveInfo);
  }
}
