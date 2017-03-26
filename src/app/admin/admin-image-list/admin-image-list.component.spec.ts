import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminImageListComponent } from './admin-image-list.component';

describe('AdminImageListComponent', () => {
  let component: AdminImageListComponent;
  let fixture: ComponentFixture<AdminImageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminImageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminImageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
