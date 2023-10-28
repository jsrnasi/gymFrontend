import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendingclassComponent } from './attendingclass.component';

describe('AttendingclassComponent', () => {
  let component: AttendingclassComponent;
  let fixture: ComponentFixture<AttendingclassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendingclassComponent]
    });
    fixture = TestBed.createComponent(AttendingclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
