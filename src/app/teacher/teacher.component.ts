import {Component, OnInit, trigger, state, style, animate, transition, group, HostListener} from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'mt-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({opacity: 1, transform: 'translateX(0)'})),
      transition('void => *', [//入场
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

      transition('* => void', [//立场
        animate('1s ease-in-out', style({opacity: 0, transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class TeacherComponent implements OnInit {

  constructor(private data: DataService) {
  }

  ngOnInit() {
  }


  cards = this.data.cards.teacher;

  qaList: any = this.data.qaList;
  activedQaCard;

  mtQaCardHandler(qaCard) {
    this.activedQaCard = this.activedQaCard != qaCard ? qaCard : null;
  }
}
