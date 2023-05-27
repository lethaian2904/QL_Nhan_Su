import { Component } from '@angular/core';
import { NhanViens } from '../model/nhanviens';
import { UserService } from '../service/user.service';
import { ServerHttpService } from '../service/server-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';


@Component({
  selector: 'app-nhanvien',
  templateUrl: './nhanvien.component.html',
  styleUrls: ['./nhanvien.component.css']
})

export class NhanvienComponent {
  public nhanviens: NhanViens[] = [];
  user: any;

  
  constructor(
      private usera: UserService,
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
      this.serverhttpservice.getNhanviens().subscribe((data) => {
        console.log('getNhanviens', data);
        this.nhanviens = data;
        this.user.setTotalNhanviens(data.length);
    });
    }
    public addNhanvien() {
      this.router.navigate(['nhanvien-form', 0]);
    }
    public deleteNhanvien(nhanvienID: number) {
      this.serverhttpservice.deleteNhanVien(nhanvienID).subscribe((data) => {
        console.log('deleta', data);
        this.loadData();
      })
    }
    public editNhanvien(nhanvienID: any) {
      this.router.navigate(['nhanvien-form', nhanvienID]);
    }

    public sortByCode(dir: string) {
      if (dir === 'up') {
        this.nhanviens = _.orderBy(this.nhanviens, ['code'], ['desc']);
      } else {
        this.nhanviens = _.orderBy(this.nhanviens, ['code'], ['asc']);
      }
    }
}
