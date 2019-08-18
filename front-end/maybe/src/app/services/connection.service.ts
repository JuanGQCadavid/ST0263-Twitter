import { Injectable } from '@angular/core'

import { environment } from '../../environments/environment'

@Injectable({ providedIn: 'root' })
export class ConnectionService{
    private apiUrl: string  = `http://${environment.api_url}:5000`;

    get_backend_dns(){
        return this.apiUrl;
    }
}