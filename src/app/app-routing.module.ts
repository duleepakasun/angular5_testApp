import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SigninComponent } from './signin/signin.component';
import { AuthGuard } from './auth/auth.guard';
import {RssFeedTesterComponent} from "./rss-feed-tester/rss-feed-tester.component";
import {CustomRssComponent} from "./custom-rss/custom-rss.component";

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
    path: '',
    canActivate: [AuthGuard],
    component: HomeComponent
  },
  {
    path: 'rssFeedTester',
    canActivate: [AuthGuard],
    component: RssFeedTesterComponent
  },
  {
    path: 'customRss',
    canActivate: [AuthGuard],
    component: CustomRssComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
