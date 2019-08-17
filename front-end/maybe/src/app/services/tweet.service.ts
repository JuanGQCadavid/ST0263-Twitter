import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
import { ConnectionService } from './connection.service'
import { ITweet } from "../models/Tweet";
@Injectable({
    providedIn: 'root'
})
export class TweetService{
    private apiUrl: String = '';

    constructor(private http: HttpClient,
                private connection: ConnectionService
                ){ 
                    this.apiUrl = connection.get_backend_dns()
                }

    getTweets(){
        return this.http.get<ITweet[]>(`${this.apiUrl}/tweets/getAll`)
    }

    creatTweet(tweet: ITweet){
        return this.http.post(`${this.apiUrl}/tweets/save`, tweet)
    }

    deleteTweet(tweet: ITweet){
        return this.http.post(`${this.apiUrl}/tweets/delete`,tweet)
    }
}

