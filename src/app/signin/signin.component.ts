import {Component, OnInit} from '@angular/core';
import {
  AuthService,
  GoogleLoginProvider
} from 'angular5-social-login';
import { CookieService } from 'ngx-cookie-service';
import {OauthService} from '../auth/auth.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {isUndefined} from "util";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})


export class SigninComponent implements OnInit {

  ngOnInit() {
    if(this.auth.isAuthenticated()){
      this.router.navigate(['/']);
    }
  }

  constructor( private socialAuthService: AuthService, private cookieService: CookieService, public auth: OauthService, public router: Router) {}

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        this.cookieService.set('token', userData.token);
        console.log(socialPlatform+" sign in data : " , userData);
        console.log(this.auth.redirectUrl);

        var redirectLocation = this.auth.redirectUrl;
        this.auth.redirectUrl = "";

        if(isUndefined(redirectLocation) || redirectLocation == ""){
          this.router.navigate(['/'])
        }

        this.router.navigate([redirectLocation])
      }
    );
  }

}
