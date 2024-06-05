import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-single-stats',
  standalone: true,
  imports: [],
  templateUrl: './single-stats.component.html',
  styleUrl: './single-stats.component.css'
})


export class SingleStatsComponent {
  @Input() value: any;  // Define an input property to receive data
  @Input() description_top: any
  @Input() description_bottom: any

}
