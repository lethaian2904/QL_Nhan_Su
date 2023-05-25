import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private REST_API_SERVER = 'http://localhost:3000'; // đường dẫn đến server
  private HttpOptions = {  
    headers: new HttpHeaders({
      'content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) { }

  login() {
    const url=`${this.REST_API_SERVER}/users`;
    return this.httpClient.get<User[]>(url);
  }

  register(data: User) {
    const url=`${this.REST_API_SERVER}/users`;
    return this.httpClient.post<User>(url, data, this.HttpOptions);
  }
}
