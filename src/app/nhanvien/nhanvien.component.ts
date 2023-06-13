import { Component, OnInit } from '@angular/core';
import { NhanViens } from '../model/nhanviens';
import { UserService } from '../service/user.service';
import { ServerHttpService } from '../service/server-http.service';
import { ActivatedRoute, Router} from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-nhanvien',
  templateUrl: './nhanvien.component.html',
  styleUrls: ['./nhanvien.component.css']
})

export class NhanvienComponent implements OnInit {
  public nhanviens: NhanViens[] = [];
  public id = 0;
  constructor(
      private user: UserService,
      private serverhttpservice: ServerHttpService,
      private router: Router,
      private route: ActivatedRoute,

  ) {}
  

  ngOnInit(): void {
    console.log();
    console.log();
    this.loadData();
    };

    private loadData() {
      this.serverhttpservice.getNhanviens().subscribe(
        (data) => {
          this.nhanviens = data;
          console.log(this.nhanviens);
          this.user.setTotalNhanviens(data.length);
        },
        (error) => {
          console.error('Error retrieving data:', error);
        }
      );
    }
    

    public addNhanvien(){
      this.router.navigate(['add']);
    }

    public deleteNhanvien(nhanvienID: number) {
    this.serverhttpservice.deleteNhanVien(nhanvienID).subscribe((data) => {
      console.log(data);
    },
    (error) => {
      console.log('Error', error);
    }
    );
    this.loadData();
    }


  }

