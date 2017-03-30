import { Component } from  '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { TweetService } from './tweet.service';
import { Tweet } from './tweet.model';

@Component({
  selector: 'tweet',
  template:`
    <div class='tweet' (click)='findTweet()'>
    <p>{{tweet}}</p>
    </div>
  `
})

export class TweetComponent {
  mode = 'Observable';
  tweeter = null;
  tweet = 'hello';


  constructor (private tweetService: TweetService) {
    this.tweeter = tweetService.getWord();
  }
  findTweet() {
    this.tweeter.subscribe(res => {
       this.tweet = res._body;
    });

  }

}
