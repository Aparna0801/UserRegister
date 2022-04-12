import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  public register(url:string){
    return this.http.get(url);
  }
  public getData(url:string){
    return this.http.get(url);
  }

  
}
