import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { CharacterDataService } from '../../../services/character-data.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  selectedFeatureId: any = -1;
  character: any = { features: [] };  // Initialize features as an empty array
  allFeatures: any[] = [];

  constructor(private characterService: CharacterDataService, private http: HttpClient) { }

  removeFeature(id: number) {
    this.characterService.currentCharacter.features = this.characterService.currentCharacter.features.filter((feature: any) => feature.id != id);
  }

  addFeature() {
    if (this.selectedFeatureId === -1)
      this.selectedFeatureId = this.availableFeatures()[0]?.id;  // Add a safe navigation operator

    const featureToAdd = this.allFeatures.find(feature => feature.id == this.selectedFeatureId);
    if (featureToAdd) {
      this.characterService.currentCharacter.features.push(featureToAdd);
      this.selectedFeatureId = -1;
    }
  }

  availableFeatures(): any[] {
    const currentFeatures = this.character?.features || [];  // Use a default value if features is undefined
    return this.allFeatures.filter(feature => !currentFeatures.map((s: any) => s.id).includes(feature.id));
  }

  ngOnInit(): void {
    this.character = this.characterService.currentCharacter;
    this.character.features = this.character.features || [];  // Ensure features is an array

    this.http.get<any[]>('http://localhost:8000/api/feature/all/4/').subscribe({
      next: data => {
        this.allFeatures = data;
      },
      error: e => {
        console.error(e);
      }
    });
  }
}

