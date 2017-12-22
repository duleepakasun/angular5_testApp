import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
} from 'angular5-social-login';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth/auth.guard';
import {OauthService} from './auth/auth.service';
import {FeedService} from './service/feed.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SigninComponent } from './signin/signin.component';

export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('1098949345130-alsj7aci1377sen5u018t0ru8p557rir.apps.googleusercontent.com')
      }
    ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    HttpModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    CookieService,
    AuthGuard,
    OauthService,
    FeedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
