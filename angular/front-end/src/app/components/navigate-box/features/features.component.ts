import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  feature1: string = 'Strength';
  feature2: string = 'Dexterity';
  feature3: string = 'Constitution';
}
