import {Component, OnInit} from '@angular/core';
import {Category} from "../category";

@Component({
  selector: 'mt-category-list',
  template: `
      <div class="panel">
        <img class="bg" src="./images/bg-1.png" alt="">
        <div class="panel-body has-header has-footer">
          <div class="mt-header">
            <div class="mt-header-logo">
              <img class="mt-header-logo-img" src="./images/logo.png" alt="">
            </div>
          </div>
          <div class="container">
            <app-category *ngFor="let category of categories" [category]="category"></app-category>
          </div>
          <div class="mt-footer">
            用得起的私人外教
          </div>
        </div>
      </div>
          
          `,
  styles: [`
    .panel{
      height: 100%;
    }
    .bg{
      height: 100%;
    }
    .panel-body{
      overflow: hidden;
    }
    .has-header{
      padding-top:80px;
    }
    .has-footer{
      padding-bottom: 60px;
    }
    .mt-header{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }
    .container{
        height: 100%;  
        min-width: 980px;
        padding-top: 8%;  
        padding-left: 20%;
        padding-right: 20%;
      }
      app-category{
        
        position: absolute;
        display: block;
        width: 25%;
        height: 80%;
        max-width: 320px;
        max-height: 450px;
        cursor: pointer;
      }
      app-category:first-child{
        left: 20%;
      }
      app-category:last-child{
        right: 20%;
      }
    .mt-footer{
      text-align: right;
      padding-right: 8%;
      line-height: 40px;
      font-size: 18px;
      color: #fff;
      position: absolute;
      bottom: 0;
      width: 100%;
      background: transparent;
    }
`],
})
export class CategoryListComponent implements OnInit {


  categories: Category[] = [{
    id: 'learner',
    linkUrl: '/learner',
    image: './images/learner.png',
    zh: '我是学习者',
    en: 'I`m a Learner',
  }, {
    id: 'teacher',
    linkUrl: '/totur',
    image: './images/teacher.png',
    zh: '我是老师',
    en: 'I`m a Teacher',
  }];

  constructor() {
  }

  ngOnInit() {
  }

}
