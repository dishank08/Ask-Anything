import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginCheckService {
  constructor(private http: HttpClient) {  }
    userlogin(data) {
      return this.http.post(environment.apiEndPoint + '/users/login', data);
    }

    userRegister(data) {
      console.log("working");
      return this.http.post(environment.apiEndPoint + '/users/create', data);
    }

}

