import { Injectable } from '@angular/core'

import { environment } from '../../environments/environment'

@Injectable({ providedIn: 'root' })
export class ConnectionService{
    private apiUrl: string  = environment.api_url;

    get_backend_dns(){
        return this.apiUrl;
    }
}
