import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  async register() {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;
      const uusername = userData.username;
      const email = userData.email;
      const password = userData.password;
      this.userService.register(uusername, email, password).subscribe(
        response => {
          console.log(response);
          // Przekierowanie
        },
        error => {
          console.error('Error: ', error);
          // Obsługa błędu
        }
      );
    }
  }
}
