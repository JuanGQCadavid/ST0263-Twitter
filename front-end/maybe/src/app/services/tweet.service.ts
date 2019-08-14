import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';

import { ITweet } from "../models/Tweet";
@Injectable({
    providedIn: 'root'
})
export class TweetService{
    private apiUrl: String = 'http://localhost:5000';

    constructor(private http: HttpClient){ }

    getAll(){
        return this.http.get<ITweet[]>(`${this.apiUrl}/tweets`)
    }

    creatTweet(tweet: ITweet){
        return this.http.post(`${this.apiUrl}/tweets/save`, tweet)

    }
}

