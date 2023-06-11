import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { NhanViens } from '../model/nhanviens';


@Injectable({
  providedIn: 'root'
})
export class ServerHttpService {
  createEmployee(nhanviens: any) {
    throw new Error('Method not implemented.');
  }
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Context-Type': 'aplication/json',
    })
  }
private REST_API_SERVER = 'http://localhost:3000';
  modifyNhanvien: any;

  constructor(private httpClient: HttpClient) { }

  public getNhanviens(){
    const url = `${this.REST_API_SERVER}/nhanviens`;
    return this.httpClient
    .get<any>(url, this.httpOptions)
    // .pipe(catchError(this.handleError))
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
    // .pipe(catchError(this.handleError));
  }
  
  public deleteNhanVien(nhanvienID: number): Observable<any> {
    const url = `${this.REST_API_SERVER}/nhanviens/${nhanvienID}`;
    console.log(url);
    return this.httpClient.delete(url);
  }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     // Xử lý lỗi từ phía khách hàng (ErrorEvent)
  //     console.error('An error occurred:', error.error.message);
  //   } else if (error.status >= 400 && error.status < 500) {
  //     // Xử lý lỗi từ phía máy chủ (HTTP Error Response)
  //     console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
  //     // Cung cấp thông báo lỗi phù hợp hoặc thực hiện các hành động khác
  //   } else {
  //     // Xử lý các lỗi không xác định
  //     console.error('An unknown error occurred:', error);
  //     // Trả về đối tượng lỗi tùy chỉnh hoặc chuỗi thông báo lỗi cụ thể
  //   }
  //   return throwError('Something bad happened; please try again later.');
  // }
  

}
