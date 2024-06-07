import { Component } from '@angular/core';
import { CharacterDataService } from '../../../services/character-data.service';
import { Action, Background, Details, Full, Race } from '../../../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {
  background: Background = {} as Background;
  details: Details = {} as Details;
  race: Full<Race> = {} as Full<Race>;

  constructor(private characterDataService: CharacterDataService) { }

  ngOnInit(): void {
    const character = this.characterDataService.currentCharacter;
    this.background = character?.background;
    this.details = character?.details;
    this.race = character?.race;
  }
}
