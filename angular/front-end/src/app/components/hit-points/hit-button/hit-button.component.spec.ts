import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitButtonComponent } from './hit-button.component';

describe('HitButtonComponent', () => {
  let component: HitButtonComponent;
  let fixture: ComponentFixture<HitButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HitButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
