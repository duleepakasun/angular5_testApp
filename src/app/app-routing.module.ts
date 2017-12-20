import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SigninComponent } from './signin/signin.component';
import { AuthGuard } from  './auth/auth.guard';
import {GraphsComponent} from "./graphs/graphs.component";
//angular.module('angular-feeds-demo', ['feeds',...])

const routes: Routes = [
  {
    path: 'login',
    component: SigninComponent
  },
  {
    path: 'about',
    canActivate: [AuthGuard],
    component: AboutComponent
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: HomeComponent
  },
  {
    path: 'graphs',
    canActivate: [AuthGuard],
    component: GraphsComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
