import { Component } from '@angular/core';
import { HitButtonComponent } from './hit-button/hit-button.component';
import { CharacterDataService } from '../../services/character-data.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-hit-points',
  standalone: true,
  imports: [ HitButtonComponent ],
  templateUrl: './hit-points.component.html',
  styleUrl: './hit-points.component.css'
})
export class HitPointsComponent {
  public selected: number = 0;
  public tempHp = 0;
  hpValues = [];

  public selectedText: string[] = ["CURR", "TEMP"];

  public character: any | null | undefined = [];

  public constructor(private characterData: CharacterDataService){}

  ngOnInit() {
    this.character = this.characterData.currentCharacter;
  }

  increaseSelected(){
    if (this.selected == 0){
      if(this.character.combat.hit_points >= this.getMaxHp()) // cant increase current above max
      return;
      else this.character.combat.hit_points++;
    } else {
      this.tempHp++;
    }
  }


  decreaseSelected(){
    if(this.selected == 0){
      if(this.character.combat.hit_points == 0) //no negatives
        return;
      this.character.combat.hit_points--;
    } else {
      if(this.tempHp == 0) return;
      this.tempHp--;
    }
  }

  changeSelected(){
    this.selected++;
    this.selected = this.selected % 2;
  }

  getMaxHp() : number{
    var values = this.character?.combat?.hit_dice.split("d");
    if (values) return values[0] * values[1];
    return 100;
  }

}
