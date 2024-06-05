import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CharacterDataService } from './services/character-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-end';

  character: any; // This will hold the fetched data

  baseStats: baseStats = {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  };

  singleStats: singleStats = {
    armor_class: 0,
    initiative: 0,
    speed: 0,
    hit_points: 0,
    hit_dice: "",
    death_saves: {},
  };

  constructor(private characterDataService: CharacterDataService) { }

  ngOnInit(): void {
    this.characterDataService.getCharacter(1).subscribe({
          next: (data) => {
            // add any needed other objects and create interfaes for them
            this.singleStats = data[0].combat as singleStats;
            this.baseStats = data[0].ability_scores as baseStats;
          },
          error: (err) => {
            console.error('Failed to fetch skills data', err);
          }
    });

    this.characterDataService.getCharacters();
  }

  
}
interface baseStats {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

interface singleStats {
  armor_class: number;
  initiative: number;
  speed: number;
  hit_points: number;
  hit_dice: string;
  death_saves: any;
}
