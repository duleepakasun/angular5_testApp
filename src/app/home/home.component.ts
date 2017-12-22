import {Component, OnInit} from '@angular/core';
import {trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';
import {Http} from '@angular/http';
import { FeedService } from '../service/feed.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [

  ]
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText = 'Add an Item';
  goalText = 'My first life goal';
  goalPlaceHolder = 'Life goal..';
  goals = [];
  news = {};

  constructor(private http: Http, private feedService: FeedService) {
    this.feedService.getNews().subscribe(data => this.news = data);
  }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }

  addItem() {
    if (this.goalText != null && this.goalText !== '') {
      this.goals.push(this.goalText);
      this.goalText = '';
      this.itemCount = this.goals.length;
    } else {
      this.goalPlaceHolder = 'goal Can\'t be empty';
    }
  }
}
