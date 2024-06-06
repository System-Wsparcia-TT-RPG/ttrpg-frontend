import { Component } from '@angular/core';
import { CharacterDataService } from '../../../services/character-data.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-spells',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './spells.component.html',
  styleUrl: './spells.component.css'
})
export class SpellsComponent {
  selectedSpellId: any = -1;
  character: any = {};
  allSpells: any[] = [];

  constructor(private characterService: CharacterDataService, private http: HttpClient) { }

  removeSpell(id: number) {
    this.characterService.currentCharacter.spells = this.characterService.currentCharacter.spells.filter((spell: any) => spell.id != id);
  }

  addSpell() {
    if (this.selectedSpellId === -1)
      this.selectedSpellId = this.availableSpells()[0].id;

    this.characterService.currentCharacter.spells.push(this.allSpells.find(spell => spell.id == this.selectedSpellId));
    this.selectedSpellId = -1;
  }

  availableSpells(): any[] {
    return this.allSpells.filter(spell => !this.character?.spells.map((s: any) => s.id).includes(spell.id));
  }

  ngOnInit(): void {
    this.character = this.characterService.currentCharacter;

    this.http.get<any[]>('http://localhost:8000/api/spell/all/4/').subscribe({
      next: data => {
        this.allSpells = data;
      },
      error: async e => { // We can check error status here
        console.error(e);
      }
    })
  }
}
