import { Component, OnInit } from '@angular/core';
import { CharacterDataService } from '../../services/character-data.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proficiencies-languages',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './proficiencies-languages.component.html',
  styleUrl: './proficiencies-languages.component.css'
})
export class ProficienciesLanguagesComponent implements OnInit {
  character: any = {};
  constructor(private characterDataService: CharacterDataService) { }

  ngOnInit(): void {
    this.character = this.characterDataService.currentCharacter;
  }
}


