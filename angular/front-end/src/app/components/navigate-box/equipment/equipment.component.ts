import { Component } from '@angular/core';
import { CharacterDataService } from '../../../services/character-data.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './equipment.component.html',
  styleUrl: './equipment.component.css'
})
export class EquipmentComponent {
  selectedEquipmentId: any = -1;
  character: any = {};
  allEquipment: any[] = [];

  constructor(private characterService: CharacterDataService, private http: HttpClient) { }

  removeEquipment(id: number) {
    this.characterService.currentCharacter.equipment = this.characterService.currentCharacter.equipment.filter((e: any) => e.id != id);
  }

  addEquipment() {
    if (this.selectedEquipmentId === -1)
      this.selectedEquipmentId = this.availableEquipment()[0].id;

    this.characterService.currentCharacter.equipment.push(this.allEquipment.find(e => e.id == this.selectedEquipmentId));
    this.selectedEquipmentId = -1;
  }

  availableEquipment(): any[] {
    return this.allEquipment.filter(eq => !this.character?.equipment.map((e: any) => e.id).includes(eq.id));
  }

  ngOnInit(): void {
    this.character = this.characterService.currentCharacter;

    this.http.get<any[]>('http://localhost:8000/api/equipment/all/4/').subscribe({
      next: data => {
        this.allEquipment = data;
      },
      error: async e => { // We can check error status here
        console.error(e);
      }
    })
  }
}
