import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { CharacterDataService } from '../../services/character-data.service';

@Component({
  selector: 'app-senses',
  standalone: true,
  imports: [HttpClientModule, CommonModule ], 
  templateUrl: './senses.component.html',
  styleUrls: ['./senses.component.css']
})


export class SensesComponent implements OnInit {
  character: any = [];

  constructor(private characterDataService: CharacterDataService) { }

  ngOnInit() {
    this.character = this.characterDataService.currentCharacter;
    console.log('Current character in senses:', this.character);
  }
}
