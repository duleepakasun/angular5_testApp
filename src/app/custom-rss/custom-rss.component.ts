import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { FeedService } from '../service/feed.service';

@Component({
  selector: 'app-custom-rss',
  templateUrl: './custom-rss.component.html',
  styleUrls: ['./custom-rss.component.sass']
})
export class CustomRssComponent implements OnInit {

  healthRecords = {};

  constructor(private http: Http, private feedService: FeedService) {
    this.feedService.getNews().subscribe(data => this.healthRecords = data);
  }

  ngOnInit() {
  }

}
