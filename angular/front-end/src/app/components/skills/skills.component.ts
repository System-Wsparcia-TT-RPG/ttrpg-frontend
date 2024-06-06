import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CharacterDataService } from '../../services/character-data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  selectedSkills: any = {};
  character: any = {};

  constructor(private characterDataService: CharacterDataService) { }

  ngOnInit(): void {
    this.character = this.characterDataService.currentCharacter;
  }

  updateSkill(skill: string, value: number): void {
    if (this.character) {
      this.character.skills[skill] = value;
    }
  }
}