import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminImageDeleteComponent } from './admin-image-delete.component';

describe('AdminImageDeleteComponent', () => {
  let component: AdminImageDeleteComponent;
  let fixture: ComponentFixture<AdminImageDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminImageDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminImageDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
