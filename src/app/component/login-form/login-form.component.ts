import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/models/api-response';
import { User } from 'src/app/models/user';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  email: string;

  constructor(public userService: UserService, private router: Router) {}

  login(form: NgForm) {
    const { email } = form.value;
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
