import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'mt-intro-card',
  templateUrl: './intro-card.component.html',
  styleUrls: ['./intro-card.component.css']
})
export class IntroCardComponent implements OnInit {

  @Input() introNo: String;
  @Input() introDesc: String;

  constructor() {
  }

  ngOnInit() {
  }

}
