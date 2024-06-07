import { Component } from '@angular/core';
import { CharacterDataService } from '../../../services/character-data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SaveCurrentDataService } from '../../../services/save-current-data.service';
import { Character, Equipment, Full } from '../../../models';

@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './equipment.component.html',
  styleUrl: './equipment.component.css'
})
export class EquipmentComponent {
  selectedEquipmentId: any = -1;
  character: Full<Character> = {} as Full<Character>;
  allEquipment: Full<Equipment>[] = [];

  constructor(private characterService: CharacterDataService, private saveDataService: SaveCurrentDataService) { }

  removeEquipment(id: number) {
    this.characterService.currentCharacter.equipment = this.characterService.currentCharacter.equipment.filter((e: any) => e.id != id);
  }

  addEquipment() {
    if (this.selectedEquipmentId === -1)
      this.selectedEquipmentId = this.availableEquipment()[0].id;

    this.characterService.currentCharacter.equipment.push(this.allEquipment.find(e => e.id == this.selectedEquipmentId) as Full<Equipment>);
    this.selectedEquipmentId = -1;
  }

  availableEquipment(): any[] {
    return this.allEquipment.filter(eq => !this.character?.equipment.map((e: any) => e.id).includes(eq.id));
  }

  ngOnInit(): void {
    this.character = this.characterService.currentCharacter;

    this.saveDataService.getData('http://localhost:8000/api/equipment/all/4/').subscribe({
      next: data => {
        this.allEquipment = data;
      },
      error: async e => { // We can check error status here
        console.error(e);
      }
    })
  }
}
