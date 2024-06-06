import { Component, Input } from '@angular/core';
import { CharacterDataService } from '../../services/character-data.service';

@Component({
  selector: 'app-base-stats',
  standalone: true,
  imports: [],
  templateUrl: './base-stats.component.html',
  styleUrl: './base-stats.component.css'
})

export class BaseStatsComponent {
  @Input() description: any
  character: any = {};
  total: number = 0;

  constructor(private charService: CharacterDataService){}

  ngOnInit(){
    this.character = this.charService.currentCharacter;
  }

  incrementValue() {
    this.character.ability_scores[this.description]++;

    this.total++;
  }
  
  decrementValue() {
    this.character.ability_scores[this.description]--;
    
    this.total--;
  }
    
}
