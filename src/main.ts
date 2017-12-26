import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common'

import 'rxjs/add/operator/map';
import {NgModule} from "../node_modules/@angular/core/src/metadata/ng_module";
import {GraphsComponent} from "./app/graphs/graphs.component";

import {
  Component,
  Directive,
  Renderer,
  ElementRef,
  NgModule,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

@Component({
  selector: 'app',
  template: `
    	<h1>My RSS Reader</h1>
    	<dashboard></dashboard>
    `
})

export class AppComponent {
  constructor() { }

  ngOnInit() {
  }
}

@Directive({
  selector:"[ccCardHover]"
})

class CardHoverDirective { }


//import {bootstrap} from '@angular/platform-browser-dynamic';
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import {NgFor} from '@angular/common';
//import {HTTP_PROVIDERS, Http} from '@angular/http';

/*class FeedService {
  private feeds =  [
    "http://angular-craft.com/feed/",
    "https://www.smashingmagazine.com/feed/",
    "http://feeds.feedburner.com/thoughtram"
  ];

  getUserFeeds() {
    return this.feeds
  }
}*/

/*@Component({
  selector: 'feed',
  directives: [NgFor],
  template: `
		<div class="feed">
	      <h3>{{data?.title}}</h3>
	      <h3>{{data?.url}}</h3>
	      <ul>
	        <li *ngFor="let entry of data?.entries">
	          <a href="{{entry.link}}">
	            {{entry.title}}
	          </a>
	        </li>
	      </ul>
	    </div>
	`
})*/


/*class FeedComponent {
  @Input() url;

  constructor(private http:Http) {
  }

  ngOnInit() {
    console.log("salut");
    this.http.get('http://demos.angular-craft.com/rss_service.php?url='+this.url)
      .map(res => res.json())
      .subscribe(res => {
        this.data = res.responseData.feed;
        console.log(res);
      });
  }
}*/

/*@Component({
  selector: 'dashboard',
  template: `
		<h3>The dashboard</h3>
		<hr>
		<div *ngFor="let feed of feeds">
			<feed [url]="feed"></feed>
		</div>
	`,
  directives: [FeedComponent, NgFor]
})
class DashboardComponent {
  constructor(private feedService: FeedService) {
    this.feeds = feedService.getUserFeeds();
  }
}*/



/*
@NgModule({
  //imports: [BrowserModule],
  declarations: [
    GraphsComponent
  ],
  entryComponents: [
    GraphsComponent
  ],
  //bootstrap: [AppComponent2]
})*/

//bootstrap(AppComponent, [HTTP_PROVIDERS, FeedService]);
