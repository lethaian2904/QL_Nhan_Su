import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NhanViens } from '../model/nhanviens';
import { UserService } from '../service/user.service';
import { ServerHttpService } from '../service/server-http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-nhanvien-form',
  templateUrl: './nhanvien-form.component.html',
  styleUrls: ['./nhanvien-form.component.css']
})
export class NhanvienFormComponent implements OnInit  {

  public id = 0;
  public nhanvienForm = new FormGroup({
    MaNhanVien: new FormControl(''),
    HoTen: new FormControl(''),
    NgaySinh: new FormControl(''),
    GioiTinh: new FormControl(''),
    MaChucVu: new FormControl(''),
    MaPhongBan: new FormControl(''),
    HeSoLuong: new FormControl(''),
    // increamentNhanVien: new FormControl(''),
  });
    
  constructor(
    private user:UserService,
    private serverHttp: ServerHttpService,
    private router: Router,
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id ? +id : 0;
    if (this.id > 0) {
      this.loadData(this.id);
    };
  }
  private loadData(id: number) {
    this.serverHttp.getNhanviens().subscribe((data) => {
      console.log('getNhanvien', data);
      const controlName: keyof typeof this.nhanvienForm.controls = 'MaNhanVien';
      for (; controlName; ) {
        this.nhanvienForm.controls[controlName].setValue(data[controlName]);
      }
    });
  }
  
  
  private createNewData(): NhanViens {
    const newNhanVien: NhanViens = {} as NhanViens;
    // for (const controlName of (Object.keys(this.nhanvienForm.controls) as any)) {
    //   if (controlName) {
      if(this.nhanvienForm.controls.HoTen.value)
      {
        newNhanVien.HoTen = this.nhanvienForm.controls.HoTen.value;
      }

      if(this.nhanvienForm.controls.GioiTinh.value)
      {
        newNhanVien.GioiTinh = this.nhanvienForm.controls.GioiTinh.value;
      }

      if(this.nhanvienForm.controls.NgaySinh.value)
      {
        newNhanVien.NgaySinh = this.nhanvienForm.controls.NgaySinh.value;
      }

      if(this.nhanvienForm.controls.MaPhongBan.value)
      {
        newNhanVien.MaPhongBan = this.nhanvienForm.controls.MaPhongBan.value;
      }

      if(this.nhanvienForm.controls.MaChucVu.value)
      {
        newNhanVien.MaChucVuNV = this.nhanvienForm.controls.MaChucVu.value;
      }
      if(this.nhanvienForm.controls.HeSoLuong.value)
      {
        newNhanVien.HeSoLuong = this.nhanvienForm.controls.HeSoLuong.value;
      } 

        console.log(newNhanVien);

    //   }
    // }
    return newNhanVien as NhanViens;
  }
  public saveAndGotoList() {
    if (this.id > 0) {
      this.serverHttp
        .modifyNhanvien(this.id, this.createNewData())
        .subscribe((data: any) => {
          this.router.navigate(['nhanviens']);
        });
    } else {
      this.serverHttp.addNhanvien(this.createNewData()).subscribe((data) => {
        this.router.navigate(['nhanviens']);
      });
    }
  }

  public save() {
    if (this.id > 0) {
      this.serverHttp
        .modifyNhanvien(this.id, this.createNewData())
        .subscribe((data: any) => {
          //
        });
    } else {
      this.serverHttp.addNhanvien(this.createNewData()).subscribe((data) => {
        this.user.icreamentNhanvien()
        this.nhanvienForm.reset();
      });
    }
  }

  public ramdomNhanvien() {
    this.serverHttp.getRamdomNhanvien() as Observable<any>;
    this.serverHttp.getNhanviens().subscribe((data) => {
      console.log('getRamdomNhanvien', data);
      if(data && data.results && data.results.length > 0) {
        const nhanvien = data.results[0];
        this.nhanvienForm.controls.MaNhanVien.setValue(
          (nhanvien.id.HoTen || '') + '-' + (nhanvien.id.value || '')
        );
        this.nhanvienForm.controls.MaNhanVien.setValue(nhanvien.MaNhanVien);
        this.nhanvienForm.controls.HoTen.setValue(nhanvien.HoTen);
        this.nhanvienForm.controls.NgaySinh.setValue(nhanvien.NgaySinh);
        this.nhanvienForm.controls.GioiTinh.setValue(nhanvien.GioiTinh);
        this.nhanvienForm.controls.MaPhongBan.setValue(nhanvien.MaPhongBan);
        this.nhanvienForm.controls.MaChucVu.setValue(nhanvien.MaChucVu);
        this.nhanvienForm.controls.HeSoLuong.setValue(nhanvien.HeSoLuong);
      }
    })
  }
  
}

function subscribe(arg0: (data: any) => void) {
  throw new Error('Function not implemented.');
}

