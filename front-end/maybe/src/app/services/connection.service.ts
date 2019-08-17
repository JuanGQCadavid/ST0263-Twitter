import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class ConnectionService{
    private apiUrl: string  = 'http://localhost:5000';

    get_backend_dns(){
        return this.apiUrl;
    }
}