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
  public hpValues: number[] = [4, 100, 0]; //current, max, temp
  public selected: number = 0;

  public selectedText: string[] = ["CURR", "MAX", "TEMP"];

  public character: any | null | undefined = [];

  public constructor(private characterData: CharacterDataService){}

  ngOnInit() {
    this.character = this.characterData?.characters[0];
    this.hpValues[0] = this.character?.combat?.hit_points;
  }

  increaseSelected(){
    if(this.selected == 0 && this.hpValues[0] >= this.hpValues[1]) // cant increase current above max
      return;
    else this.character.combat.hit_points++;
  }


  decreaseSelected(){
    if(this.hpValues[this.selected] == 0) //no negatives
      return;
    this.character.combat.hit_points--;
    if (this.hpValues[1] < this.hpValues[0]) {
      
      this.hpValues[0] = this.hpValues[1];
    } //if max drops below current, change current to new max
  }

  changeSelected(){
    this.selected++;
    this.selected = this.selected % 3;
  }

}
