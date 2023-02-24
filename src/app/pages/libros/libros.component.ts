import { Component } from '@angular/core';
import {
  faCircleXmark,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css'],
})
export class LibrosComponent {
  faCircleXmark = faCircleXmark;
  faMagnifyingGlass = faMagnifyingGlass;
  displayForm: boolean = false;
  books: Libro[] = [];

  constructor(public librosService: LibrosService) {
    this.books = librosService.getAll();
  }

  openOrCloseForm() {
    this.displayForm = !this.displayForm;
  }

  addBook(
    id: HTMLInputElement,
    userId: HTMLInputElement,
    title: HTMLInputElement,
    author: HTMLInputElement,
    price: HTMLInputElement,
    photo: HTMLInputElement
  ) {
    if (
      !id.value ||
      !userId.value ||
      !title.value ||
      !author.value ||
      !price.value ||
      !photo.value
    ) {
      this.displayForm = false;
      return;
    }

    const book = new Libro(
      Number(id.value),
      Number(userId.value),
      title.value,
      author.value,
      Number(price.value),
      photo.value
    );

    id.value = '';
    userId.value = '';
    title.value = '';
    author.value = '';
    price.value = '';
    photo.value = '';

    this.displayForm = false;
    this.librosService.add(book);
  }

  deleteBook(id: number) {
    console.log(typeof id);
    this.librosService.delete(id);
  }

  findBook(id: string) {
    if (!id) {
      this.books = this.librosService.getAll();
      return;
    }
    const book = this.librosService.getOne(Number(id));
    if (!book) {
      this.books = [];
      return;
    }
    this.books = [book];
  }
}
