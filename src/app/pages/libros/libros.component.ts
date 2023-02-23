import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css'],
})
export class LibrosComponent {
  displayForm: boolean = false;
  books: Libro[] = [
    {
      id: 10,
      userId: 1,
      title: 'El juego de la oca',
      author: 'Pablito Perez',
      price: 20,
      photo: 'https://loremflickr.com/320/240/books',
    },
    {
      id: 11,
      userId: 2,
      title: 'Las flores del campo',
      author: 'Maria Sonsoles',
      price: 10,
      photo: 'https://loremflickr.com/320/240/flowers',
    },
    {
      id: 12,
      userId: 3,
      title: 'Mis canciones',
      author: 'Juanito Valderrama',
      price: 30,
      photo: 'https://loremflickr.com/320/240/songs',
    },
  ];

  openForm() {
    this.displayForm = true;
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

    this.books.push(book);

    id.value = '';
    userId.value = '';
    title.value = '';
    author.value = '';
    price.value = '';
    photo.value = '';

    this.displayForm = false;
  }
}
