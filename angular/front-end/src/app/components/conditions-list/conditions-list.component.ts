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
  hit_dice: string = "No current hit dice";
  damage_dice: any = {}
  constructor(private characterDataService: CharacterDataService) { }

  ngOnInit(): void {
    this.characterDataService.getCharacter(1).subscribe({
          next: (data) => {
            this.hit_dice = data[0].combat["hit_dice"];
            this.damage_dice = data[0].race.actions[0]["damage_dice"];
          },
          error: (err) => {
            console.error('Failed to fetch skills data', err);
          }
    });
  }

}