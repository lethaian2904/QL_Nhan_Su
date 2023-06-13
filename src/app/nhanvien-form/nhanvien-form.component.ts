import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';
import { NhanViens } from '../model/nhanviens';
import { UserService } from '../service/user.service';
import { ServerHttpService } from '../service/server-http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nhanvien-form',
  templateUrl: './nhanvien-form.component.html',
  styleUrls: ['./nhanvien-form.component.css']
})
export class NhanvienFormComponent implements OnInit  {
  public nhanviens: NhanViens[] = [];
  public id =0;
  public nhanvienForm = new FormGroup({
    ID: new FormControl(''),
    HoTen: new FormControl(''),
    NgaySinh: new FormControl(''),
    GioiTinh: new FormControl(''),
    MaChucVu: new FormControl(''),
    MaPhongBan: new FormControl(''),
    HeSoLuong: new FormControl('')
  });
    
  constructor(
    private user:UserService,
    private serverHttp: ServerHttpService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.route.queryParams.subscribe((p:any)=> {
      this.id = p.id;
    })    
    if (this.id > 0) {
      this.loadData(this.id);
    };
  }
  
  public loadData(id: number) {
    this.serverHttp.getNhanvien(id).subscribe((data) => {
      this.nhanviens.push(data);
      console.log('getNhanvien', data);

      this.nhanvienForm.patchValue({

        ID: data.id,
        HoTen: data.Hoten,
        NgaySinh: data.NgaySinh,
        GioiTinh: data.Gioitinh,
        MaPhongBan: data.MaphongBan,
        MaChucVu: data.MachucVuNV,
        HeSoLuong: data.HesoLuong
      });
    });

  }

      
  public createNewData(): NhanViens {
    const newNhanVien: NhanViens = {} as NhanViens; 
    
      if(this.nhanvienForm.controls.ID.value)
      {
        newNhanVien.id=Number(this.nhanvienForm.controls.ID.value);
      };
      if(this.nhanvienForm.controls.HoTen.value)
      {
        newNhanVien.Hoten = this.nhanvienForm.controls.HoTen.value;
      };
      if(this.nhanvienForm.controls.GioiTinh.value)
      {
        newNhanVien.Gioitinh = this.nhanvienForm.controls.GioiTinh.value;
      };
      if(this.nhanvienForm.controls.NgaySinh.value)
      {
        const ngaySinh=new Date(this.nhanvienForm.controls.NgaySinh.value);
        newNhanVien.Ngaysinh = ngaySinh;
      };
      if(this.nhanvienForm.controls.MaPhongBan.value)
      {
        newNhanVien.MaphongBan = this.nhanvienForm.controls.MaPhongBan.value;
      };
      if(this.nhanvienForm.controls.MaChucVu.value)
      {
        newNhanVien.MachucVuNV = this.nhanvienForm.controls.MaChucVu.value;
      };
      if(this.nhanvienForm.controls.HeSoLuong.value)
      {
        newNhanVien.HesoLuong = Number(this.nhanvienForm.controls.HeSoLuong.value);
      };
      console.log(this.nhanviens);
    return newNhanVien as NhanViens;
  }

  public saveAndGotoList() {
    if (this.id > 0) {
      this.serverHttp
        .modifyNhanvien(this.id, this.createNewData())
        .subscribe((data: any) => {
          this.loadData(this.id);
          this.router.navigate(['home']);
        });
    } else {
      this.serverHttp.addNhanvien(this.createNewData()).subscribe((data) => {
        this.router.navigate(['home']);
      });
    }
  }

  public save() {
    if (this.id > 0) {
      this.serverHttp
        .modifyNhanvien(this.id, this.createNewData())
        .subscribe((data: any) => {
          this.loadData(this.id)
        });
    } else {
      this.serverHttp.addNhanvien(this.createNewData()).subscribe((data) => {
        this.user.icreamentNhanvien()
        this.nhanvienForm.reset();
      });
    }
  }

}

function subscribe(arg0: (data: any) => void) {
  throw new Error('Function not implemented.');
}

