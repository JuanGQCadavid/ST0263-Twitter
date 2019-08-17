import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ConnectionService } from './connection.service'
import { User } from '../models/User';

@Injectable({ providedIn: 'root' })
export class UserService {
    private apiUrl: string  = '';
    constructor(private http: HttpClient,
                private connection: ConnectionService
        ) { 
            this.apiUrl = connection.get_backend_dns()
        }

    getAll() {
        return this.http.get<User[]>(`${this.apiUrl}/users`);
    }

    register(user: User) {
        return this.http.post(`${this.apiUrl}/users/register`, user);
    }

    delete(id: number) {
        return this.http.delete(`${this.apiUrl}/user/${id}`);
    }

    
}