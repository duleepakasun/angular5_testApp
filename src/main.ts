import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import 'https://www.googlcom/jsapi?autoload=%7B%22modules%22%3A%5B%7B%22name%22%3A%22feeds%22%2C%22version%22%3A%221.0%22%2C%22nocss%22%3Atrue%7D%5D%7D.js';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));




/*
class FeedService {
  private feeds =  [
    "http://angular-craft.com/feed/",
    "https://www.smashingmagazine.com/feed/",
    "http://feeds.feedburner.com/thoughtram"
  ];

  getUserFeeds() {
    return this.feeds
  }
}

@Component({
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
})
class FeedComponent {
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
}

@Component({
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
}


@Component({
  selector: 'app',
  template: `
    	<h1>My RSS Reader</h1>
    	<dashboard></dashboard>
    `,
  directives: [DashboardComponent]
})
class AppComponent {
}

bootstrap(AppComponent, [HTTP_PROVIDERS, FeedService]);
*/
