import { Component } from '@angular/core';
import { TweetService } from './tweet.service'

@Component({
  selector: 'app-root',
  providers: [TweetService],
  template: `
  <h1>My First Angular 2 App</h1>
  <tweet></tweet>
  `
})

export class AppComponent {

}
