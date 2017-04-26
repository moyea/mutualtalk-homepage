import {Component, OnInit, Input} from '@angular/core';
import {Category} from '../category.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category',
  template: `
    <div class="content" (click)="goDetail()">
      <img class="header-img" src="{{category.image}}" alt="">
      <div class="c-name">
        <div class="text-wrapper">
          <div *ngIf="category.id=='learner'">
            {{category.zh}}
          </div>
          <div>{{category.en}}</div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .content {
      position: relative;
      height: 400px;
      text-align: center;
      background: rgba(255, 255, 255, 0.50);
      box-shadow: 2px 2px 7px 0 rgba(171, 171, 171, 0.50);
      border-radius: 8px;
    }

    .header-img {
      width: 80%;
      margin-top: -10%;
    }

    .c-name {
      position: absolute;
      bottom: 0;
      margin-bottom: -10%;
      width: 190px;
      left: 50%;
      margin-left: -95px;
      height: 80px;
      z-index: 5;
    }
    .c-name:before {
      content: "";
      position: absolute;
      display: inline-block;
      width: 100%;
      height: 100%;
      left: 0;
      border-radius: 10px;
      background-color: #fcfcfc;
      -webkit-filter: blur(4px);
      -ms-filter: blur(4px);
      filter: blur(4px);
    }

    .c-name .text-wrapper {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      line-height: 80px;
      font-size: 24px;
      color: #2b2b2b;
      padding: 10px;
    }

    .c-name .text-wrapper div {
      line-height: 30px;
    }

    .c-name .text-wrapper div:first-child:last-child {
      line-height: 60px;
    }
  `]
})

export class CategoryComponent implements OnInit {

  @Input() category: Category;

  constructor(private router: Router) {
  }

  goDetail() {
    let link = [this.category.linkUrl];
    this.router.navigate(link);
  }

  ngOnInit() {
  }

}
