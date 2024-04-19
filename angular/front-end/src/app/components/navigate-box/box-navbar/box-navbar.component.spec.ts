import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxNavbarComponent } from './box-navbar.component';

describe('BoxNavbarComponent', () => {
  let component: BoxNavbarComponent;
  let fixture: ComponentFixture<BoxNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoxNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
