import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  user: User;
  message: string;
  messageStatus: string;

  constructor() {
    this.user = {
      id: 0,
      firstName: 'Jesica',
      lastName: 'Romero',
      email: 'jesica@gmail.com',
      photoUrl: 'https://loremflickr.com/320/240/profile',
    };
    this.message = '';
    this.messageStatus = '';
  }

  updateUser(
    firstName: HTMLInputElement,
    lastName: HTMLInputElement,
    email: HTMLInputElement,
    photoUrl: HTMLInputElement
  ) {
    if (
      !firstName.value &&
      !lastName.value &&
      !email.value &&
      !photoUrl.value
    ) {
      this.messageStatus = 'error';
      this.message = 'No se ha detectado cambios';
      return;
    }

    this.user.firstName = firstName.value || this.user.firstName;
    this.user.lastName = lastName.value || this.user.lastName;
    this.user.email = email.value || this.user.email;
    this.user.photoUrl = photoUrl.value || this.user.photoUrl;

    firstName.value = '';
    lastName.value = '';
    email.value = '';
    photoUrl.value = '';

    this.messageStatus = 'success';
    this.message = 'Usuario actaulizado';
  }
}
