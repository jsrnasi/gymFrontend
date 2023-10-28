import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasspaymentfailureComponent } from './classpaymentfailure.component';

describe('ClasspaymentfailureComponent', () => {
  let component: ClasspaymentfailureComponent;
  let fixture: ComponentFixture<ClasspaymentfailureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClasspaymentfailureComponent]
    });
    fixture = TestBed.createComponent(ClasspaymentfailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
