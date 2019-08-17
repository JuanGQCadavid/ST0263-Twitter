import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { first } from 'rxjs/operators'

import { DatePipe } from '@angular/common';

import { AlertService } from '../services/alert.service';
import { TweetService } from '../services/tweet.service';
import { AuthenticationService } from '../services/authentication.service'

import { User } from '../models/User'
import { ITweet } from '../models/Tweet'

import { Router } from '@angular/router';

@Component({
    selector: 'tweet-creator',
    templateUrl: 'tweet-creator.component.html',
    styleUrls: ['tweet-creator.component.css'],
    providers: [DatePipe]
})
export class TweetCreatorComponent implements OnInit {
    currentUser: User;
    tweetForm: FormGroup;
    loading = false;
    submitted = false;
    myDate = new Date();

    constructor(private authenticationService: AuthenticationService,
                private tweetService: TweetService,
                private formBuilder: FormBuilder,
                private alertService: AlertService,
                private datePipe: DatePipe,
                private router: Router
                ){
                    this.currentUser = this.authenticationService.currentUserValue;
                }

    
    ngOnInit(){
        this.tweetForm = this.formBuilder.group({
            title: ['', Validators.required],
            body: ['', Validators.required]
        });

    }
    // convenience getter for easy access to form fields
    get f() { return this.tweetForm.controls; }

    onSubmit(){
        this.submitted = true;

        this.alertService.clear();

        // stop here if form is invalid
        if(this.tweetForm.invalid){
            return;
        }

        this.loading = true;

        var newTweet: ITweet = this.tweetForm.value;
        newTweet['username'] = this.currentUser['username']
        newTweet['date'] = this.datePipe.transform(this.myDate, 'full')

        this.tweetService.creatTweet(newTweet)
            .pipe(first())
            .subscribe(
                data =>{
                    if(data['status'] == 'err'){
                        this.alertService.error(data['err'], true)
                        this.loading = false;
                        this.router.navigate(['/login'])
                    }
                    else{
                        this.alertService.success(data['done'], true);
                        this.loading = false;
                        this.router.navigate(['/login'])
                    }
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
        
    }
}