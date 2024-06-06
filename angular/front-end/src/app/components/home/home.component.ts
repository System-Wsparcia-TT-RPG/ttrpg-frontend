import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CharacterDataService } from '../../services/character-data.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  characters: any[] = [];
  selectedCharacterId: number = 0;

  constructor(
    private userService: UserService,
    private router: Router,
    private characterDataService: CharacterDataService
  ) { }

ngOnInit(): void {
    this.characterDataService.getCharacters().subscribe((data) => {
      this.characters = data;
      if (this.characters.length > 0) {
        this.selectedCharacterId = this.characters[0].id; // Ustaw pierwszą postać jako domyślną
        this.characterDataService.charId = this.selectedCharacterId; // Ustaw charId w serwisie na ID pierwszej postaci
      }
    });
  }
  isLogged() {
    return this.userService.isLoggedIn();
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  test() {
    console.log('test');
  }

  onCharacterChange(event: any) {
    this.characterDataService.currentCharacter = this.characters[event.target.value];
    this.characterDataService.charId = event.target.value;
  }



  
}
