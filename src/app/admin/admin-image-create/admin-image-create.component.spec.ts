import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminImageCreateComponent } from './admin-image-create.component';

describe('AdminImageCreateComponent', () => {
  let component: AdminImageCreateComponent;
  let fixture: ComponentFixture<AdminImageCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminImageCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminImageCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
