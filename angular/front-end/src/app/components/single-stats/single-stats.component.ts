import { Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CharacterDataService } from '../../services/character-data.service';


@Component({
  selector: 'app-single-stats',
  standalone: true,
  imports: [FormsModule], // Include necessary modules here
  templateUrl: './single-stats.component.html',
  styleUrls: ['./single-stats.component.css']
})
export class SingleStatsComponent {
  @Input() description: any;  
  @Input() description_top: any;
  @Input() description_bottom: any;

  character: any = {};
  total: number = 0;

  constructor(private charService: CharacterDataService){}

  ngOnInit(){
    this.character = this.charService.currentCharacter;
  }

  incrementValue() {
    this.character.combat[this.description]++; // chnage to proper vals
    this.total++;
  }
  
  decrementValue() {
    this.character.combat[this.description]--; // chnage to proper vals
  
    this.total--;
  }
}
