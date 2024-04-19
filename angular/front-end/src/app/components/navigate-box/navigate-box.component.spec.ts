import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateBoxComponent } from './navigate-box.component';

describe('NavigateBoxComponent', () => {
  let component: NavigateBoxComponent;
  let fixture: ComponentFixture<NavigateBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigateBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigateBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
