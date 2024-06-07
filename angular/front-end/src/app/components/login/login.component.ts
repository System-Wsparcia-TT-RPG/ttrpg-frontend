import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { CharacterDataService } from '../../services/character-data.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  incorrectCredentials = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private characterDataService: CharacterDataService
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.valid) {
      const userData = this.loginForm.value;
      const username = userData.username;
      const password = userData.password;
      this.userService.login(username, password).subscribe({
        next: data => {
          // Successfully logged in
          this.characterDataService.getCharacters();
          console.log(this.characterDataService.characters);
          this.router.navigate(['/home']);
        },
        error: async error => {
          if (error.status === 401) {
            this.incorrectCredentials = true;
            this.errorMessage = 'Incorrect username or password.';
          } else {
            this.errorMessage = 'An unexpected error occurred. Please try again later.';
          }
          this.loginForm.reset();
        }
      });
    }
  }

  resetErrorState() {
    this.incorrectCredentials = false;
  }
}
