import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TweetsComponent } from './tweets/tweets.component';
import { NavegationBarComponent } from './navegation-bar/navegation-bar.component';
import { TweetCreatorComponent } from './tweet-creator/tweet-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    TweetsComponent,
    NavegationBarComponent,
    TweetCreatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
