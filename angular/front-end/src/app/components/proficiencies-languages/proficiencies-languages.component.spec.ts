import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProficienciesLanguagesComponent } from './proficiencies-languages.component';

describe('ProficienciesLanguagesComponent', () => {
  let component: ProficienciesLanguagesComponent;
  let fixture: ComponentFixture<ProficienciesLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProficienciesLanguagesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProficienciesLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
