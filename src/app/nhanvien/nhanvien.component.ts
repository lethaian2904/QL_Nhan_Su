import { Component } from '@angular/core';
import { NhanViens } from '../model/nhanviens';
import { UserService } from '../service/user.service';
import { ServerHttpService } from '../service/server-http.service';
import { Router } from 'express';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nhanvien',
  templateUrl: './nhanvien.component.html',
  styleUrls: ['./nhanvien.component.css']
})
export class NhanvienComponent {
  public nhanviens: NhanViens[] = [];
  

  constructor(
      private user: UserService,
      private serverhttpservice: ServerHttpService,
      private router: Router, 
      private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log();
    console.log();
    this.loadData();
    };

    private loadData() {
      this.serverhttpservice.getNhanviens().subscribe(data) => {
        console.log('getNhanviens', data);
        this.nhanviens = data;
        this.user.
      }
    }
    public addNhanvien() {
      this.route.navigate(['nhanvien-form', 0]);
    }
    public deleteNhanvien(nhanvienID: number) {
      this.serverhttpservice.deleteNhanVien(nhanvienID).subscribe((data) => {
        console.log('deleta', data);
        this.loadData();
      })
    }
    public editNhanVien(nhanvienID: any) {
      this.route.navigate(['nhanvien-form', nhanvienID]);
    }
}
