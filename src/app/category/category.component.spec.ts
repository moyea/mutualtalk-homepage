/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {CategoryComponent} from './category.component';
import {Router} from "@angular/router";
import {NgModuleFactory} from "@angular/core";
import {appRouting} from "../app.routes";
import {Category} from "../category";


class RouterMock {
  navigate(url: string) {
    return url;
  }
}

let category: Category = {
  id: 'learner',
  linkUrl: '/learner',
  image: '../images/learner.png',
  zh: '我是学习者',
  en: 'I`m a Learner',
};

describe('Component: Category', () => {
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{provider: Router, useClass: RouterMock}],
      imports: [CategoryComponent]
    });
  }));
  beforeEach(inject([Router], (router: Router) => this.router = router));
  it('should create an instance', () => {
    let component = new CategoryComponent(router);
    expect(component).toBeTruthy();
  });
  it('should tell the Router to navigate when goDetail called',()=>{
    const spy = spyOn(router,'navigate');
    let comp = new CategoryComponent(router);
    comp.category=category;
    comp.goDetail();
    const navArgs=spy.calls.first().args[0];
    expect(navArgs).toBe(category.linkUrl,"should navigate to the category linkUrl");
  });
});
