import { Component, OnInit } from '@angular/core';
import { CharacterDataService } from './../../services/character-data.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proficiencies-languges',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './proficiencies-languges.component.html',
  styleUrl: './proficiencies-languges.component.css'
})
export class ProficienciesLangugesComponent  implements OnInit {
  character: any = [];
  constructor(private CharacterDataService: CharacterDataService) { }

  ngOnInit(): void {
    this.CharacterDataService.getCharacters().subscribe({
          next: (data) => {
            this.character = data.characters;
            // console.log('Full character object:', JSON.stringify(this.character, null, 2));
            if (this.character.length > 0 && this.character[0].data) {
              // console.log('Data of the first character:', JSON.stringify(this.character[0].data, null, 2));
            }
          },
          error: (err) => {
            console.error('Failed to fetch data', err);
          }
    });
  }
}

