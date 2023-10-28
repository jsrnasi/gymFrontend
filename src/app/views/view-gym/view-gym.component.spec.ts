import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGymComponent } from './view-gym.component';

describe('ViewGymComponent', () => {
  let component: ViewGymComponent;
  let fixture: ComponentFixture<ViewGymComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewGymComponent]
    });
    fixture = TestBed.createComponent(ViewGymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
