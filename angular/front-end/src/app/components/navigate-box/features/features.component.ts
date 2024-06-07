import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { CharacterDataService } from '../../../services/character-data.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Character, Full } from '../../../models';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
})
export class FeaturesComponent {
  character: Full<Character> = null!;

  constructor(private characterService: CharacterDataService) {}

  ngOnInit(): void {
    this.character = this.characterService.currentCharacter;
  }
}
