import { Component } from '@angular/core';
import { NhanViens } from '../model/nhanviens';
import { UserService } from '../service/user.service';
import { ServerHttpService } from '../service/server-http.service';
import { Router } from 'express';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  public nhanviens: NhanViens[] = [];
  id: number;
  nhanvienForm: any;
  

  constructor(
      private user: UserService,
      private serverhttpservice: ServerHttpService,
      private router: Router,
      private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    if (this.id > 0) {
      this.loadData(this.id);
    }
  }

  private loadData(id) {
    this.serverhttpservice.getNhanviens(id).subscribe((data) => {
      console.log('getStudent', data);
      for (const controlName in this.nhanvienForm.controls) {
        if (controlName) {
          this.nhanvienForm.controls[controlName].setValue(data[controlName]);
        }
      }
    });
  }

  }
