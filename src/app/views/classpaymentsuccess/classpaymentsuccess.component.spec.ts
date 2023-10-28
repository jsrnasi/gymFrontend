import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasspaymentsuccessComponent } from './classpaymentsuccess.component';

describe('ClasspaymentsuccessComponent', () => {
  let component: ClasspaymentsuccessComponent;
  let fixture: ComponentFixture<ClasspaymentsuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClasspaymentsuccessComponent]
    });
    fixture = TestBed.createComponent(ClasspaymentsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
