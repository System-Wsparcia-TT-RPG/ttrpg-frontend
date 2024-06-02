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
  character: any;
  constructor(private CharacterDataService: CharacterDataService) { }

  ngOnInit(): void {
    this.CharacterDataService.getCharacter(1).subscribe({
          next: (data) => {
            this.character = data[0];
          },
          error: (err) => {
            console.error('Failed to fetch data', err);
          }
    });
  }
}

