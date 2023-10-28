import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesProvideComponent } from './classes-provide.component';

describe('ClassesProvideComponent', () => {
  let component: ClassesProvideComponent;
  let fixture: ComponentFixture<ClassesProvideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassesProvideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassesProvideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
