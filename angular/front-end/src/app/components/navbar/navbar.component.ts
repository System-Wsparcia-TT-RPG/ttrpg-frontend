import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar', 
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  constructor(
    private userService: UserService){}

  logout() {
    this.userService.logout();
    console.log(this.userService.isLoggedIn());
  }

  isLogged() {
    return this.userService.isLoggedIn();
  }
}
