import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  constructor(public userService: UserService, private router: Router) {}

  login(email: HTMLInputElement) {
    if (!email.value) {
      return;
    }
    this.userService.login(email.value).subscribe(
      (data: any) => {
        if (data.user) {
          this.userService.loggedIn = true;
          this.userService.user = data.user;
          this.router.navigate(['/books']);
        }
      },
      (error: Error) => {
        console.log(error);
      }
    );

    email.value = '';
  }
}
