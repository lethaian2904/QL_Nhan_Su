import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { NhanViens } from '../model/nhanviens';


@Injectable({
  providedIn: 'root'
})
export class ServerHttpService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Context-Type': 'aplication/json',
    })
  }
private REST_API_SERVER = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  public getNhanviens(){
    const url = `${this.REST_API_SERVER}/nhanviens`;
    return this.httpClient
    .get<any>(url, this.httpOptions)
  }

  public getNhanvien(id: number): Observable<any> {
    const url = `${this.REST_API_SERVER}/nhanviens/` + id;
    return this.httpClient
    .get<any>(url, this.httpOptions);
  }

 public createNewData(data: NhanViens): Observable<any> {
    const url = `${this.REST_API_SERVER}/nhanviens`;
    console.log(url);
    return this.httpClient.post<any>(url, data);
  } 

  public addNhanvien(data: NhanViens): Observable<any> {
    const url = `${this.REST_API_SERVER}/nhanviens`;
    console.log(url);
    return this.httpClient
    .post<any>(url, data, this.httpOptions)
  }
  
  public deleteNhanVien(nhanvienID: number): Observable<any> {
    const url = `${this.REST_API_SERVER}/nhanviens/${nhanvienID}`;
    console.log(url);
    return this.httpClient.delete(url);
  }

  public modifyNhanvien(nhanvienID: number, data:NhanViens) {
    const url = `${this.REST_API_SERVER}/nhanviens/` + nhanvienID;
    return this.httpClient
      .put<any>(url, data, this.httpOptions)

  }

}
