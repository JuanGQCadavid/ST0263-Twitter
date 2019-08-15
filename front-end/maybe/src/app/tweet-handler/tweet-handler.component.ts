import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Form , NgModel } from '@angular/forms';

import { first } from 'rxjs/operators';

import { AlertService } from '../services/alert.service';
import { TweetService } from '../services/tweet.service';
import { AuthenticationService } from '../services/authentication.service'

import { User } from '../models/User'
import { ITweet } from '../models/Tweet'

import { Router } from '@angular/router'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tweet-handler',
  templateUrl: './tweet-handler.component.html',
  styleUrls: ['./tweet-handler.component.css']
})
export class TweetHandlerComponent implements OnInit {
  currentUser: User;
  tweet_list: ITweet[];
  tweet_list_filter: ITweet[];
  

  _listFilter: string = ""
  get listFilter(): string{
      return this._listFilter;
  }
  set listFilter(value: string){
      this._listFilter = value.toLowerCase();

      this.tweet_list_filter = this.listFilter ? this.perform_filter(this.listFilter) : this.tweet_list;
  }

  perform_filter(filter_by: string): ITweet[]{
    filter_by = filter_by.toLowerCase()

    return this.tweet_list.filter( (tweet: ITweet) => 
        tweet.tags.toString().toLowerCase().indexOf(filter_by) != -1)
  }

  constructor(private authenticationService: AuthenticationService,
                private tweetService: TweetService
                ){
                    this.currentUser = this.authenticationService.currentUserValue;
                }

  ngOnInit(){
    
    this.tweetService.getTweets()
        .pipe(first())
        .subscribe(
            data =>{
                this.tweet_list = data;
                this.tweet_list_filter = this.tweet_list;
            }
        )
    }

}
