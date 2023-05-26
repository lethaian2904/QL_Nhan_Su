import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhanvienFormComponent } from './nhanvien-form.component';

describe('NhanvienFormComponent', () => {
  let component: NhanvienFormComponent;
  let fixture: ComponentFixture<NhanvienFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhanvienFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NhanvienFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
