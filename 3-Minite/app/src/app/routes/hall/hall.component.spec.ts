import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HallComponent } from './hall.component';

describe('HallComponent', () => {
  let component: HallComponent;
  let fixture: ComponentFixture<HallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
