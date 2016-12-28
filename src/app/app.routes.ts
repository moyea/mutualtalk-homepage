import {Routes, RouterModule} from "@angular/router";
import {TeacherComponent} from "./teacher/teacher.component";
import {LearnerComponent} from "./learner/learner.component";
import {ModuleWithProviders} from "@angular/core";
import {CategoryListComponent} from "./category-list/category-list.component";
const appRoutes: Routes = [
  {
    path: '',
    component: CategoryListComponent
  },
  {
    path: 'learner',
    component: LearnerComponent
  },
  {
    path: 'totur',
    component: TeacherComponent
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
