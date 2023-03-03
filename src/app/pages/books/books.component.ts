import { Component } from '@angular/core';
import {
  faCircleXmark,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { UserService } from 'src/app/services/user.service';

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
  userId: number;

  constructor(
    public bookService: BookService,
    public userService: UserService
  ) {
    this.userId = this.userService.user.id || undefined;
    this.getAllBooks();
  }

  getAllBooks() {
    this.bookService
      .getAll(this.userId)
      .subscribe((data: { books: Book[] }) => {
        this.books = data.books;
      });
  }

  openOrCloseForm() {
    this.displayForm = !this.displayForm;
  }

  addBook(
    title: HTMLInputElement,
    author: HTMLInputElement,
    price: HTMLInputElement,
    photoUrl: HTMLInputElement
  ) {
    if (!title.value || !author.value || !price.value || !photoUrl.value) {
      this.displayForm = false;
      return;
    }

    const book = new Book(
      this.userId,
      title.value,
      author.value,
      Number(price.value),
      photoUrl.value
    );

    title.value = '';
    author.value = '';
    price.value = '';
    photoUrl.value = '';

    this.displayForm = false;
    this.bookService.add(book).subscribe((data: any) => {
      if (data.ok) this.getAllBooks();
    });
  }

  deleteBook(id: number) {
    this.bookService.delete(id).subscribe((data: any) => {
      if (data.ok) this.getAllBooks();
    });
  }

  findBook(id: string) {
    if (!id) {
      this.getAllBooks();
      return;
    }
    this.bookService
      .getOne(this.userId, Number(id))
      .subscribe((data: { books: Book[] }) => {
        this.books = data.books;
      });
  }
}
