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
    this.spells = this.characterDataService.characters[0]?.spells;
  }
}
