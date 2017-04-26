import {Component, OnInit} from '@angular/core';
import {Category} from '../category.model';
import {DataService} from '../services/data.service';

@Component({
  selector: 'mt-category-list',
  template: `
    <div class="panel">
      <img class="bg" src="assets/images/bg-1.png" alt="">
      <div class="panel-body has-header has-footer">
        <div class="mt-header">
          <div class="mt-header-logo">
            <img class="mt-header-logo-img" src="assets/images/logo.png" alt="">
          </div>
        </div>
        <div class="container">
          <app-category *ngFor="let category of categories" [category]="category"></app-category>
        </div>
        <div class="mt-footer">学习英语 从未如此简单</div>
      </div>
    </div>
  `,
  styles: [`
    .panel {
      min-height: 700px;
      height: 100%;
    }

    .bg {
      height: 100%;
    }

    .panel-body {
      overflow: hidden;
    }

    .has-header {
      padding-top: 80px;
    }

    .has-footer {
      padding-bottom: 60px;
    }

    .mt-header {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }

    .container {
      height: 100%;
      min-height: 600px;
      min-width: 980px;
      padding-top: 8%;
      padding-left: 20%;
      padding-right: 20%;
    }

    app-category {
      position: absolute;
      display: block;
      width: 25%;
      height: 80%;
      max-width: 320px;
      max-height: 450px;
      cursor: pointer;
    }

    app-category:first-child {
      left: 20%;
    }

    app-category:last-child {
      right: 20%;
    }

    .mt-footer {
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


  categories: Category[] = this.data.categorys;

  constructor(private data: DataService) {
  }

  ngOnInit() {
  }

}
