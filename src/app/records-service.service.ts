import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from './user.model';



@Injectable({
  providedIn: 'root'
})
export class RecordsServiceService {
  apurl = "https://jsonplaceholder.typicode.com/users";
  constructor(private _http: HttpClient) { }

 getUsers(){
   return this._http.get<user[]>(this.apurl);
 }
}
