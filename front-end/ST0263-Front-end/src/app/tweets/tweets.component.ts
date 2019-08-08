import { Component, OnInit } from '@angular/core';
import { ITweet } from "../share/tweet"
import { TweetService } from '../share/tweets.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  filterTweets: ITweet[];
  tweetsList: ITweet[];
  errorMessage: string;
  _tweetsFilter: string = ""

  get tweetsFilter(): string{
    return this._tweetsFilter;
  }

  set tweetsFilter(value: string){
    this._tweetsFilter = value;
  }

  createTweet(): void{

  }

  constructor(private tweetService: TweetService) {}

  ngOnInit(): void  {
    console.log('Initing..');
    //this.tweetsList = this.tweetService.getTweetsStatic();
    this.tweetService.getTweets().subscribe(
      tweets => {this.tweetsList = tweets},
      error => this.errorMessage = <any> error
    );
  }

}
