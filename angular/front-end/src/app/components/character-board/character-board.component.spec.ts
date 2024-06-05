import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterBoardComponent } from './character-board.component';

describe('CharacterBoardComponent', () => {
  let component: CharacterBoardComponent;
  let fixture: ComponentFixture<CharacterBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
