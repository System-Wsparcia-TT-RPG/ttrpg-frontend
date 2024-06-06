import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

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
  incorrecCredentials = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  async login() {
    if (this.loginForm.valid) {
      const userData = this.loginForm.value;
      const userName = userData.username;
      const password = userData.password;
      this.userService.login(userName, password).subscribe(
        response => {
          console.log(response);
          const message = response.message;
          switch (message) {
            case 'Użytkownik istnieje':
              this.userService.setLoggedUser(userName);
              this.userService.setLogged(true);
              this.router.navigate(['/character-board']);
              break;
            case 'Nieprawidłowe dane':
            case 'Błędne hasło':
              this.incorrecCredentials = true;
              this.errorMessage = message;
              this.loginForm.reset();
              break;

          };
        },
        error => {
          window.alert(error);
          this.loginForm.reset();
        }
      );
    }
  }

  resetErrorState() {
    this.incorrecCredentials = false;
  }
}
