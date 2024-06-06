import { Component } from '@angular/core';
import { CharacterDataService } from '../../../services/character-data.service';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {
  background: any = {};
  details: any = {};

  constructor(private characterDataService: CharacterDataService) { }

  ngOnInit(): void {
    const character = this.characterDataService.characters[0];
    this.background = character?.background;
    this.details = character?.details;
  }
}
