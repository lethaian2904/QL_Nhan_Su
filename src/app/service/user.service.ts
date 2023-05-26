import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public totalNhanviens = 0;
  public totalNhanvien$ = new BehaviorSubject<number>(0);

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

  public setTotalNhanviens(total: number) {
    this.totalNhanviens = total;
    this.totalNhanvien$.next(total);
  }
  
  public icreamentNhanvien() {
    this.totalNhanviens++;
    this.totalNhanvien$.next(this.totalNhanviens);
  }
}
