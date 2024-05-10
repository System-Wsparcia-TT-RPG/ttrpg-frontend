import { Component } from '@angular/core';
import { HitButtonComponent } from './hit-button/hit-button.component';

@Component({
  selector: 'app-hit-points',
  standalone: true,
  imports: [ HitButtonComponent ],
  templateUrl: './hit-points.component.html',
  styleUrl: './hit-points.component.css'
})
export class HitPointsComponent {
  public hpValues: number[] = [4, 12, 0]; //current, max, temp
  public selected: number = 0;

  public selectedText: string[] = ["CURR", "MAX", "TEMP"];

  increaseSelected(){
    if(this.selected == 0 && this.hpValues[0] >= this.hpValues[1]) // cant increase current above max
      return;
    else this.hpValues[this.selected]++;
  }

  decreaseSelected(){
    if(this.hpValues[this.selected] == 0) //no negatives
      return;
    this.hpValues[this.selected]--;

    if (this.hpValues[1] < this.hpValues[0]) {
      console.log(this.hpValues[1], this.hpValues[0]);
      
      this.hpValues[0] = this.hpValues[1];
    } //if max drops below current, change current to new max
  }

  changeSelected(){
    this.selected++;
    this.selected = this.selected % 3;
  }

}
