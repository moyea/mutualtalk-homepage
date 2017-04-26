import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {scrollToDom, showAlert} from '../app.utils';
import {environment} from '../../environments/environment';
import {Http} from '@angular/http';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'mt-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({opacity: 1, transform: 'translateX(0)'})),
      transition('void => *', [// 入场
        style({opacity: 0, transform: 'translateX(100%)'}),

        animate('1s ease-in-out'),
        // animate('1s 0.5s ease-in-out'),
        // animate('1s 1s ease-in-out'),
        // animate('1s 1.5s ease-in-out'),
        // animate('1s 2s ease-in-out'),
        // animate('1s 2.5s ease-in-out'),
        // animate('1s 3s ease-in-out'),
        // animate('1s 3.5s ease-in-out')
      ]),
      transition('* => void', [// 立场
        animate('1s ease-in-out', style({opacity: 0, transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class TeacherComponent implements OnInit {

  private url = environment.endPoint + environment.applyToTeacher;

  scrollTo = scrollToDom;
  cards = this.data.cards.teacher;
  qaList: any = this.data.qaList;
  activedQaCard = null;

  constructor(private http: Http, private data: DataService) {
  }

  ngOnInit() {
  }

  mtQaCardHandler(qaCard) {
    this.activedQaCard = this.activedQaCard !== qaCard ? qaCard : null;
  }

  onSubmit(value: any): void {
    if (!value.username || value.username.length < 1) {
      return showAlert('error', 'Incorrect username！');
    }
    if (!(/^\w+([-+.]\w+)*@\w+([-.]\w+)*.\w+([-.]\w+)*$/.test(value.email))) {
      return showAlert('error', 'Incorrect email address！');
    }
    const url = this.url + '?username=' + value.username + '&email=' + value.email;
    this.http.get(url)
      .toPromise()
      .then(resp => {
        const data = resp.json();
        if (data.code === 0) {
          showAlert('success', 'Apply to teacher success');
        } else {
          showAlert('error', 'System error');
        }
      });
  }
}
