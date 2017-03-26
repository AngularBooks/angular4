import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminImageEditComponent } from './admin-image-edit.component';

describe('AdminImageEditComponent', () => {
  let component: AdminImageEditComponent;
  let fixture: ComponentFixture<AdminImageEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminImageEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminImageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
