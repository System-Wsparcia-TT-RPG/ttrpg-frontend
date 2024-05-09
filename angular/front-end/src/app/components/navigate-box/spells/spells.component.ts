import { Component } from '@angular/core';
import { CharacterDataService } from '../../../services/character-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spells',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spells.component.html',
  styleUrl: './spells.component.css'
})
export class SpellsComponent {

  spells: any[] = [];

  constructor(private characterDataService: CharacterDataService) { }

  ngOnInit(): void {
    this.characterDataService.getCharacters().subscribe({
          next: (data) => {
            this.spells = data.characters[0].data.spells;
            console.log(this.spells);
          },
          error: (err) => {
            console.error('Failed to fetch spells data', err);
          }
    });
  }

}
