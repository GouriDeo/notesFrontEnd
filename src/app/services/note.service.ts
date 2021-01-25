import {Injectable} from '@angular/core'
import { HttpClient} from '@angular/common/http';
import {notee} from '../services/note.model'

@Injectable ({
    providedIn: 'root'  
})

export class HttpRequestService{
    constructor(private _http:HttpClient){}
    add(note:any){
        return this._http.post('http://localhost:5050/note',note)
    }
}
