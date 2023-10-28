import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassschcComponent } from './classschc.component';

describe('ClassschcComponent', () => {
  let component: ClassschcComponent;
  let fixture: ComponentFixture<ClassschcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassschcComponent]
    });
    fixture = TestBed.createComponent(ClassschcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
