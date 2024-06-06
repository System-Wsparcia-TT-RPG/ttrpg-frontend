import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CharacterDataService } from '../../services/character-data.service';

@Component({
  selector: 'app-conditions-list',
  standalone: true,
  imports: [],
  templateUrl: './conditions-list.component.html',
  styleUrl: './conditions-list.component.css'
})
export class ConditionsListComponent {
  count: any;
  sides: any;
  damage_dice: any = {}
  character: any ;
  constructor(private characterDataService: CharacterDataService) { }

  ngOnInit(): void {
    this.character = this.characterDataService.currentCharacter;
  
    this.damage_dice = this.character?.race.actions[0]["damage_dice"];
    this.count = this.damage_dice?.count
    this.sides = this.damage_dice?.sides

  }

  incrementSides() {
    this.character.race.actions[0]["damage_dice"]["sides"]++
   }
  
  decrementSides() {
    this.character.race.actions[0]["damage_dice"]["sides"]--
  }


  incrementCount() {
    this.character.race.actions[0]["damage_dice"]["count"]++
   }
  
  decrementCount() {
    this.character.race.actions[0]["damage_dice"]["count"]--
  }

}