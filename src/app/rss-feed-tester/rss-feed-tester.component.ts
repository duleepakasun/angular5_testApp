import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { FeedService } from '../service/feed.service';

@Component({
  selector: 'app-rss-feed-tester',
  templateUrl: './rss-feed-tester.component.html',
  styleUrls: ['./rss-feed-tester.component.sass']
})
export class RssFeedTesterComponent implements OnInit {

  //constructor() { }
  news = {};

  constructor(private http: Http, private feedService: FeedService) {
   this.feedService.getNews().subscribe(data => this.news = data);
   }

  ngOnInit() {
  }

}
