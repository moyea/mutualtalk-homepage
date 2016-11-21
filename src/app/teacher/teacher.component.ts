import {Component, OnInit, trigger, state, style, animate, transition, group, HostListener} from '@angular/core';

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

  constructor() {
  }

  ngOnInit() {
  }


  cards = [{
    no: '01',
    intro: 'You set your own prices. Earn thousands of dollars as an online teacher.'
  }, {
    no: '02',
    intro: 'You make your own hours.Work as little or as much as you want.Students ' +
    'schedule lessons for times that you are available to teach.'
  }, {
    no: '03',
    intro: 'You create your own classrooms within MutualTalk.'
  }, {
    no: '04',
    intro: 'You share your best moments or even upload your personal style teaching' +
    ' materialson your own page.Demonstrate a history of quality,' +
    'reliability,and high student satisfaction.Use this reputation to find new students andfuture employers.'
  }];

  qaList: any = [
    {
      icon: './images/qa_icon_1.png',
      icon_active: './images/qa_icon_1_1.png',
      question: '1.What is MutualTalk?',
      answers: ['MutualTalk is an English teaching app via real-time video & audio calls developed by Shanghai Hunge Information Technology Co., Ltd.']
    },
    {
      icon: './images/qa_icon_2.png',
      icon_active: './images/qa_icon_2_1.png',
      question: '2.What are the requirements for being a MutulTalk tutor?',
      answers: ['A. Language Proficiency: Native & Fluent English speakers. Applicants with TEFL/TESOL/CELTA certificate or IELTS/TOEFL teaching experience are preferred;'
        , 'B. Stable & High Internet Access.',
        'C. A smartphone with IOS or Android operating system.',
        'D. Quiet Environment.'
      ]
    }, {
      icon: './images/qa_icon_3.png',
      icon_active: './images/qa_icon_3_1.png',
      question: '3.How do you teach on MutualTalk?',
      answers: ['A. Free talk via video & audio calls.',
        'B. Lessons teaching by using teaching materials provided by yourself.',
        'C. Lessons teaching by using teaching materials provided by MutulTalk.']
    }, {
      icon: './images/qa_icon_4.png',
      icon_active: './images/qa_icon_4_1.png',
      question: '4.How much do you get paid?',
      answers: [
        'A. FREE TALK——You set your rate and get paid for each full minute you spend talking to learners.',
        'B. LESSONES TEACHING——You set your lesson tuition and get paid by teaching.',
        'C. LESSONES SHARING——You can share your lessons slides to other tutors and get 10% of their earnings.'
      ]
    },
    {
      icon: './images/qa_icon_5.png',
      icon_active: './images/qa_icon_5_1.png',
      question: '5.How do you get paid?',
      answers: ['MutualTalk pays you via Paypal & Alipay.']
    }, {
      icon: './images/qa_icon_6.png',
      icon_active: './images/qa_icon_6_1.png',
      question: '6.How long does it take to verify my tutor account?',
      answers: [
        'One to two business days, please wait in patience.'
      ]
    }, {
      icon: './images/qa_icon_7.png',
      icon_active: './images/qa_icon_7_1.png',
      question: '7.What are the values of MutualTalk?',
      answers: [
        'Settling problems such as inconvenient time and place, enormous costs of traditional language training via Mobile Internet, ' +
        'freeing tutors from restrictions of institution, becoming masters of themselves.'
      ]
    }, {
      icon: './images/qa_icon_8.png',
      icon_active: './images/qa_icon_8_1.png',
      question: '8.How to apply for a tutor on MutualTalk?',
      answers: [
        'Scan the QR code down below to download MutualTalk app.'
      ]
    }
  ];
  activedQaCard;

  mtQaCardHandler(qaCard) {
    this.activedQaCard = this.activedQaCard != qaCard ? qaCard : null;
  }
}
