import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  feature1: string = 'Feature 1';
  feature2: string = 'Feature 2';
  feature3: string = 'Feature 3';
}
