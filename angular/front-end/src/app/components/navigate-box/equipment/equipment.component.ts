import { Component } from '@angular/core';
import { CharacterDataService } from '../../../services/character-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipment.component.html',
  styleUrl: './equipment.component.css'
})
export class EquipmentComponent {
  equipment: any[] = [];

  constructor(private characterDataService: CharacterDataService) { }

  ngOnInit(): void {
    this.equipment = this.characterDataService.characters[0]?.equipment;
  }
}
