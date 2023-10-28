import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGymComponent } from './edit-gym.component';

describe('EditGymComponent', () => {
  let component: EditGymComponent;
  let fixture: ComponentFixture<EditGymComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditGymComponent]
    });
    fixture = TestBed.createComponent(EditGymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
