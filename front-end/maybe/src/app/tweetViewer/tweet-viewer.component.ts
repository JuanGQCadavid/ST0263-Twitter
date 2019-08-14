import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';

import { first } from 'rxjs/operators';

import { AlertService } from '../services/alert.service';
import { TweetService } from '../services/tweet.service';
import { AuthenticationService } from '../services/authentication.service'

import { User } from '../models/User'
import { ITweet } from '../models/Tweet'

import { Router } from '@angular/router'
import { DatePipe } from '@angular/common';

@Component({
    selector: 'tweet-viewer',
    template: 'tweet-viewer.component.html',
    styleUrls: ['tweet-viewer.component.css'],
    providers: [DatePipe]
})
export class TweetViewerComponent implements OnInit {
    currentUser: User;

    tweet_list: ITweet[];

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
                }
            )
    }
}
