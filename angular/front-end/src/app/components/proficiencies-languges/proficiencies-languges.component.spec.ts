import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProficienciesLangugesComponent } from './proficiencies-languges.component';

describe('ProficienciesLangugesComponent', () => {
  let component: ProficienciesLangugesComponent;
  let fixture: ComponentFixture<ProficienciesLangugesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProficienciesLangugesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProficienciesLangugesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
