import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionsListComponent } from './conditions-list.component';

describe('ConditionsListComponent', () => {
  let component: ConditionsListComponent;
  let fixture: ComponentFixture<ConditionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConditionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
