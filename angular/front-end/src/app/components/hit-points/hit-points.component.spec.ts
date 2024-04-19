import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitPointsComponent } from './hit-points.component';

describe('HitPointsComponent', () => {
  let component: HitPointsComponent;
  let fixture: ComponentFixture<HitPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HitPointsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HitPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
