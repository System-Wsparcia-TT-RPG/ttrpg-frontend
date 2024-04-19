import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseStatsComponent } from './base-stats.component';

describe('BaseStatsComponent', () => {
  let component: BaseStatsComponent;
  let fixture: ComponentFixture<BaseStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseStatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BaseStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
