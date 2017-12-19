import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class OauthService {

  constructor( private cookieService: CookieService) { }

  public redirectUrl: string;

  public isAuthenticated(): boolean {

    const token =  this.cookieService.get('token');
    console.log(token);
    if(token != null && token != ''){
      return true;
    }
    return false;
  }

}
