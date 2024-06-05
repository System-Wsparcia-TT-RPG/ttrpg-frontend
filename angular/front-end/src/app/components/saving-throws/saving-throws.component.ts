import { Component } from '@angular/core';
import { CharacterDataService } from '../../services/character-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-saving-throws',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './saving-throws.component.html',
  styleUrl: './saving-throws.component.css'
})
export class SavingThrowsComponent {
  savingThrows: savingThrows = {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  };


  constructor(private characterDataService: CharacterDataService) { }

  ngOnInit(): void {
    this.characterDataService.getCharacter(1).subscribe({
          next: (data) => {
            this.savingThrows = data[0].saving_throws as savingThrows;
          },
          error: (err) => {
            console.error('Failed to fetch skills data', err);
          }
    });
  }

}

interface savingThrows {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}