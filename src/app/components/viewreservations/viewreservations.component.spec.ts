import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewreservationsComponent } from './viewreservations.component';

describe('ViewreservationsComponent', () => {
  let component: ViewreservationsComponent;
  let fixture: ComponentFixture<ViewreservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewreservationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewreservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
