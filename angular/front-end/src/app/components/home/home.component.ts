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
    this.characters = this.characterDataService.characters;
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

  goToCharacterBoard() {
    this.router.navigate(['/character-board']);
  }

  test() {
    console.log('test');
  }

  onCharacterChange(event: any) {
    this.characterDataService.charId = event.target.value - 1 ;
  }
  
}
