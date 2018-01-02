import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router} from '@angular/router';
import {OauthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';
  val = true;

  logout() {
    this.cookieService.delete('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return this.auth.isAuthenticated();
  }

  constructor( private cookieService: CookieService, private router: Router, public auth: OauthService) { }
}
