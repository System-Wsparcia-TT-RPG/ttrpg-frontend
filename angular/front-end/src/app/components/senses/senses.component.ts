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
    // this.characterDataService.getJsonData().subscribe({
    //   next: (data) => {
    //     this.character = data;
    //   },
    //   error: (err) => {
    //     console.error('Failed to fetch data', err);
    //   }
    // });
    this.characterDataService.getCharacters().subscribe({
      next: data => {
        this.character = this.characterDataService.characters[0];
      }
    })
  }
}
