import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { TweetComponent } from './tweet-tweet.component';
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
  imports: [BrowserModule, HttpModule, JsonpModule],
  declarations: [ AppComponent, TweetComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
