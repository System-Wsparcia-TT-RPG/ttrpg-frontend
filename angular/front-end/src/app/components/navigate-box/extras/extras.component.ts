import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-extras',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './extras.component.html',
  styleUrl: './extras.component.css'
})
export class ExtrasComponent {
  
}
