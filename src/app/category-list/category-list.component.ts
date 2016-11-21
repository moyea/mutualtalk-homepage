import {Component, OnInit} from '@angular/core';
import {Category} from "../category";

@Component({
  selector: 'mt-category-list',
  template: `
          <div class="container">
              <app-category *ngFor="let category of categories" [category]="category"></app-category>
            </div>
  `,
  styles: [`
    .container{
        display: -webkit-flex;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        background: url(./images/bg-1.png) 0 no-repeat fixed;
        background-size: 100% 100%;
        position: absolute;
        width: 100%;
        height: 100%;  
        min-width: 980px;
      }
      app-category{
        flex: 1;
        max-width: 320px;
        width: 320px;
        height: 450px;
        margin: 0 8%;
      }
`],
})
export class CategoryListComponent implements OnInit {


  categories: Category[] = [{
    id: 'learner',
    linkUrl: '/learner',
    image: '../images/learner.png',
    zh: '我是学习者',
    en: 'I`m a Learner',
  }, {
    id: 'teacher',
    linkUrl: '/teacher',
    image: '../images/teacher.png',
    zh: '我是老师',
    en: 'I`m a Teacher',
  }];

  constructor() {
  }

  ngOnInit() {
  }

}
