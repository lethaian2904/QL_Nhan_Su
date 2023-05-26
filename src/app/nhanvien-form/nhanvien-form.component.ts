import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NhanViens } from '../model/nhanviens';
import { UserService } from '../service/user.service';
import { ServerHttpService } from '../service/server-http.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-nhanvien-form',
  templateUrl: './nhanvien-form.component.html',
  styleUrls: ['./nhanvien-form.component.css']
})
export default class NhanvienFormComponent implements OnInit  {

  
  public id = 0;
  public nhanvienForm = new FormGroup({
    MaNhanVien: new FormControl(''),
    HoTen: new FormControl(''),
    NgaySinh: new FormControl(''),
    GioiTinh: new FormControl(''),
    MaChucVu: new FormControl(''),
    MaPhongBan: new FormControl(''),
    HeSoLuong: new FormControl(''),
    increamentNhanVien: new FormControl(''),
  });
  
  constructor(
    private user:UserService,
    private serverHttp: ServerHttpService,
    private router: Router,
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {
    
    this.id = +this.route.snapshot.paramMap.get('id');
    if (this.id > 0) {
      this.loadData(this.id);
    }
  }
  private loadData(id: number) {
    this.serverHttp.getNhanviens(id).subscribe((data) => {
      console.log('getStudent', data);
      for (const controlName in this.nhanvienForm.controls) {
        if (controlName) {
          this.nhanvienForm.controls[controlName].setValue(data[controlName]);
        }
      }
    });
  }
  private createNewData() {
    const newNhanVien :{ [key: string]: any } = {};
    for (const controlName of Object.keys(this.nhanvienForm.controls)) {
      if (controlName) {
        newNhanVien[controlName] = this.nhanvienForm.controls[controlName].value;
      }
    }
    return newNhanVien as NhanViens;
  }
  public saveAndGotoList() {
    if (this.id > 0) {
      this.serverHttp
        .modifyNhanvien(this.id, this.createNewData())
        .subscribe((data) => {
          this.router.navigate(['students']);
        });
    } else {
      this.serverHttp.addNhanvien(this.createNewData()).subscribe((data) => {
        this.router.navigate(['students']);
      });
    }
  }

  public save() {
    if (this.id > 0) {
      this.serverHttp
        .modifyNhanvien(this.id, this.createNewData())
        .subscribe((data) => {
          //
        });
    } else {
      this.serverHttp.addNhanvien(this.createNewData()).subscribe((data) => {
        this.user.icreamentNhanvien()
        this.nhanvienForm.reset();
      });
    }
  }

  
}

