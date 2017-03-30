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
    this.tweeter = tweetService.getTweet();
  }
  findTweet() {
    console.log('hello');
    this.tweeter.subscribe(res => {
       console.log(res);
       this.tweet = res._body;
    });

  }

}
