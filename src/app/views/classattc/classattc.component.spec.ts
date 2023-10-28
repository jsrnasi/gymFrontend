import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassattcComponent } from './classattc.component';

describe('ClassattcComponent', () => {
  let component: ClassattcComponent;
  let fixture: ComponentFixture<ClassattcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassattcComponent]
    });
    fixture = TestBed.createComponent(ClassattcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
