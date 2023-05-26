import { HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
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
private REST_API_SERVER = 'http://localhost';

  constructor(private httpClient: HttpClient) { }

  public getNhanviens() {
    const url = `${this.REST_API_SERVER}/nhanviens`;
    return this.httpClient
    .get<any>(url, this.httpOptions)
    .pipe(catchError(this.handleError))
  }

  public getNhanvien(nhanvienID: number) {
    const url = `${this.REST_API_SERVER}/nhanviens/` + nhanvienID;
    return this.httpClient
    .get<any>(url, this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  public addNhanvien(data: NhanViens) {
    const url = `${this.REST_API_SERVER}/nhanviens`;
    return this.httpClient
    .post<any>(url, data, this.httpOptions)
    .pipe(catchError(this.handleError));
  }
  
  public deleteNhanVien(nhanvienID: number) {
    const url = `${this.REST_API_SERVER}/profile`;
    return this.httpClient
    .get<any>(url, this.httpOptions)
    .pipe(catchError(this.handleError));
  }


  public getProfile() {
      const url = `${this.REST_API_SERVER}/profile`;
      return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }

}
