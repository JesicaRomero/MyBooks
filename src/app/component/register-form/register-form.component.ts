import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/models/api-response';

import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent {
  user: User;

  constructor(public userService: UserService, private router: Router) {
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      photoUrl: '',
    };
  }

  register(form: NgForm) {
    const user = form.value;
    this.userService.register(user).subscribe({
      next: (data: ApiResponse) => {
        if (data.ok) {
          this.autoLogin(user.email);
        }
      },
      error: (error: Error) => {
        console.log(error);
      },
    });
  }

  autoLogin(email: string) {
    this.userService.login(email).subscribe({
      next: (value: { user: User } | ApiResponse) => {
        if ('user' in value) {
          this.userService.loggedIn = true;
          this.userService.user = value.user;
          this.router.navigate(['/books']);
        } else {
          console.log(value.message);
        }
      },
      error: (error: Error) => {
        console.log(error);
      },
    });
  }
}
