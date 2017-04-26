import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'mt-qa-card',
  templateUrl: './qa-card.component.html',
  styleUrls: ['./qa-card.component.css']
})
export class QaCardComponent implements OnInit {

  @Input() isActive = false;
  @Input() qaCard;
  @Output() itemClick = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
  }

}
