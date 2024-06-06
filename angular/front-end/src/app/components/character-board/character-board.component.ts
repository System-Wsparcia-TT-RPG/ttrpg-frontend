import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseStatsComponent } from '../base-stats/base-stats.component';
import { ConditionsListComponent } from '../conditions-list/conditions-list.component';
import { HitPointsComponent } from '../hit-points/hit-points.component';
import { NavigateBoxComponent } from '../navigate-box/navigate-box.component';
import { ProficienciesLanguagesComponent } from '../proficiencies-languages/proficiencies-languages.component';
import { SavingThrowsComponent } from '../saving-throws/saving-throws.component';
import { SensesComponent } from '../senses/senses.component';
import { SingleStatsComponent } from '../single-stats/single-stats.component';
import { SkillsComponent } from '../skills/skills.component';
import { CharacterDataService } from '../../services/character-data.service';

@Component({
  selector: 'app-character-board',
  standalone: true,
  imports: [
    CommonModule,
    BaseStatsComponent,
    ConditionsListComponent,
    HitPointsComponent,
    NavigateBoxComponent,
    ProficienciesLanguagesComponent,
    SavingThrowsComponent,
    SensesComponent,
    SingleStatsComponent,
    SkillsComponent
  ],
  templateUrl: './character-board.component.html',
  styleUrl: './character-board.component.css'
})
export class CharacterBoardComponent {

  title = 'front-end';

  character: any; // This will hold the fetched data

  singleStats: singleStats | undefined = {
    armor_class: 0,
    initiative: 0,
    speed: 0,
    hit_points: 0,
    id: 0,
    death_saves: {},
  };

  constructor(public characterDataService: CharacterDataService) { }

  ngOnInit(): void {
    this.characterDataService.getCharacters();

    this.singleStats = this.characterDataService.currentCharacter?.combat as singleStats;
    this.characterDataService.currentCharacter;
  };
}

interface singleStats {
  armor_class: number;
  initiative: number;
  speed: number;
  hit_points: number;
  id: number;
  death_saves: any;
}