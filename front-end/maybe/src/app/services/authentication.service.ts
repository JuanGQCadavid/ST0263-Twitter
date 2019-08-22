import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { User } from '../models/User';
import { AlertService } from '../services/alert.service'
import {ConnectionService } from './connection.service'


@Injectable({ providedIn: 'root' })

export class AuthenticationService {
    private apiUrl: string  = '';
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient,
                private connectionService:ConnectionService) {
        this.apiUrl = connectionService.get_backend_dns()
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username, password) {
        return this.http.post<any>(`${this.apiUrl}/users/authenticate`, { username, password })
            .pipe(map(user => {
                if(user['status'] === 'err'){
                    return user;
                }else{
                    console.log(JSON.stringify(user))
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                    return user;
                }
                // store user details and jwt token in local storage to keep user logged in between page refreshes

            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}