import { Component, OnInit } from '@angular/core';
import { ITweet } from "../share//tweet"
import { TweetService } from '../share//tweets.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tweet-creator',
  templateUrl: './tweet-creator.component.html',
  styleUrls: ['./tweet-creator.component.css']
})
export class TweetCreatorComponent implements OnInit {

  constructor(private tweetService: TweetService) { }

  ngOnInit() {
  }

  onCreate():void{

  }

}
