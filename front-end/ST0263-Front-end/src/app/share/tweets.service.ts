import { Injectable } from "@angular/core";
import { ITweet } from "./tweet";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {tap, catchError} from 'rxjs/operators';
import { LowerCasePipe } from '@angular/common';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TweetService{
  private serverUrl = 'http://localhost:3000/testFind';

  constructor(private http: HttpClient){}

  getTweets(): Observable<ITweet[]>{
    return this.http.get<ITweet[]>(this.serverUrl).pipe(
      tap(data => console.log('All ' +  JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  addTweet (tweet: ITweet): Observable<ITweet> {
    return this.http.post<ITweet>(this.serverUrl, tweet, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse){
    // We mingth send infor to teh server but whatever
    let errorMessage = '';

    if (err.error instanceof ErrorEvent){
      // A client-side or network error occured. Handle it accordingly
      errorMessage = `An error occurred: ${err.error.message}`;
    }else{
      // The back-end returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong
      errorMessage = `Server returned code: ${err.status}, error message is ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  getTweetsStatic(): ITweet[] {
    return [{"tags":["#Test","#anOtherTest"],"_id":"5d48a15c9ce4e21218618e4e","title":"Tweet test","authorId":"Back-end","body":"Testing body","date":"04/08/2019","__v":0}]
  }

}
