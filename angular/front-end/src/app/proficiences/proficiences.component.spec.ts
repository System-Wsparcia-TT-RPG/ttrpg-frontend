import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProficiencesComponent } from './proficiences.component';

describe('ProficiencesComponent', () => {
  let component: ProficiencesComponent;
  let fixture: ComponentFixture<ProficiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProficiencesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProficiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
