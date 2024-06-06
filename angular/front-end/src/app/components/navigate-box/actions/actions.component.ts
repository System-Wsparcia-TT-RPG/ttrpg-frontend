import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CharacterDataService } from '../../../services/character-data.service';

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.css'
})
export class ActionsComponent {
  actions: any[] = [];

  constructor(private characterDataService: CharacterDataService) { }

  ngOnInit(): void {
    this.actions = this.characterDataService.characters[0]?.race.actions;
  }
}
