import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CharacterDataService } from '../../services/character-data.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: object = {};

  constructor(private characterDataService: CharacterDataService) { }

  ngOnInit(): void {
    this.characterDataService.getCharacter(1).subscribe({
          next: (data) => {
            this.skills = data.characters[0].Skills;
            console.log(this.skills);
          },
          error: (err) => {
            console.error('Failed to fetch skills data', err);
          }
    });
  }
}
