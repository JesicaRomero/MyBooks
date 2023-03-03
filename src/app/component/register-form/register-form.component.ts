import { Component } from '@angular/core';

import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent {
  constructor(public userService: UserService) {}

  register(
    firstName: HTMLInputElement,
    lastName: HTMLInputElement,
    email: HTMLInputElement,
    photoUrl: HTMLInputElement
  ) {
    if (
      !firstName.value ||
      !lastName.value ||
      !email.value ||
      !photoUrl.value
    ) {
      return;
    }
    const user = new User(
      firstName.value,
      lastName.value,
      email.value,
      photoUrl.value
    );

    firstName.value = '';
    lastName.value = '';
    email.value = '';
    photoUrl.value = '';

    this.userService.register(user).subscribe((data: any) => {
      console.log(data);
    });
  }
}
