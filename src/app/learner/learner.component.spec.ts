/* tslint:disable:no-unused-variable */

import {TestBed, inject} from '@angular/core/testing';
import {LearnerComponent} from './learner.component';
import {Http, BaseRequestOptions} from "@angular/http";
import {MockBackend} from "@angular/http/testing";

describe('Component: Learner', () => {
  let http: Http;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MockBackend,
        BaseRequestOptions, {
          provide: Http,
          useFactory: (backend: MockBackend, options: BaseRequestOptions) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }],
      declarations: [
        LearnerComponent
      ]
    });
  });
  beforeEach(inject([Http], (http: Http) => this.http = http));

  it('should create an instance', () => {
    let component = new LearnerComponent(http);
    expect(component).toBeTruthy();
  });
});
