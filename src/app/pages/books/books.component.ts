import { Component } from '@angular/core';
import {
  faCircleXmark,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  faCircleXmark = faCircleXmark;
  faMagnifyingGlass = faMagnifyingGlass;
  displayForm: boolean = false;
  books: Book[] = [];

  constructor(public bookService: BookService) {
    this.books = bookService.getAll();
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
    photoUrl: HTMLInputElement
  ) {
    if (
      !id.value ||
      !userId.value ||
      !title.value ||
      !author.value ||
      !price.value ||
      !photoUrl.value
    ) {
      this.displayForm = false;
      return;
    }

    const book = new Book(
      Number(id.value),
      Number(userId.value),
      title.value,
      author.value,
      Number(price.value),
      photoUrl.value
    );

    id.value = '';
    userId.value = '';
    title.value = '';
    author.value = '';
    price.value = '';
    photoUrl.value = '';

    this.displayForm = false;
    this.bookService.add(book);
  }

  deleteBook(id: number) {
    console.log(typeof id);
    this.bookService.delete(id);
  }

  findBook(id: string) {
    if (!id) {
      this.books = this.bookService.getAll();
      return;
    }
    const book = this.bookService.getOne(Number(id));
    if (!book) {
      this.books = [];
      return;
    }
    this.books = [book];
  }
}
