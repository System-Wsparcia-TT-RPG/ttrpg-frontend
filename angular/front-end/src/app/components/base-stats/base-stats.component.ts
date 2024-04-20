import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-stats',
  standalone: true,
  imports: [],
  templateUrl: './base-stats.component.html',
  styleUrl: './base-stats.component.css'
})

export class BaseStatsComponent {
  @Input() value: any;  // Define an input property to receive data
  @Input() description: any

    // Method to increment the value
    incrementValue() {
      this.value += 1;
    }
  
    // Method to decrement the value
    decrementValue() {
      this.value -= 1;
    }
    
}
