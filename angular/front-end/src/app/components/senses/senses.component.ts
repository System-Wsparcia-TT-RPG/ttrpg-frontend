import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { CharacterDataService } from '../../services/character-data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-senses',
  standalone: true,
  imports: [FormsModule, CommonModule ], 
  templateUrl: './senses.component.html',
  styleUrls: ['./senses.component.css']
})


export class SensesComponent implements OnInit {
  character: any = [];

  constructor(private characterDataService: CharacterDataService) { }

  ngOnInit() {
    this.character = this.characterDataService.currentCharacter;
    console.log('Current character in senses:', this.character?.race.senses);
  }

    updateSenses(savingThrow: string, value: number): void {
    if (this.character) {
      this.character.saving_throws[savingThrow] = value;
    }
  }
}


// import { Component } from '@angular/core';
// import { CharacterDataService } from '../../services/character-data.service';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-saving-throws',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './saving-throws.component.html',
//   styleUrl: './saving-throws.component.css'
// })
// export class SavingThrowsComponent {
//   character: any = {}
//   constructor(private characterDataService: CharacterDataService) { }

//   ngOnInit(): void {
//     this.character = this.characterDataService.currentCharacter;
//   }

//   updateSavingThrow(savingThrow: string, value: number): void {
//     if (this.character) {
//       this.character.saving_throws[savingThrow] = value;
//     }
//   }
// }