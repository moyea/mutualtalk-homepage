import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {CategoryComponent} from './category/category.component';
import {LearnerComponent} from './learner/learner.component';
import {TeacherComponent} from './teacher/teacher.component';
import {appRouting} from './app.routes';
import {CategoryListComponent} from './category-list/category-list.component';
import {IntroCardComponent} from './intro-card/intro-card.component';
import {QaCardComponent} from './qa-card/qa-card.component';
import {DataService} from './services/data.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    LearnerComponent,
    TeacherComponent,
    CategoryListComponent,
    IntroCardComponent,
    QaCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    appRouting
  ],
  bootstrap: [AppComponent],
  providers: [DataService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
