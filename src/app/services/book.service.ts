import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  public books: Book[] = [
    {
      id: 10,
      userId: 1,
      title: 'El juego de la oca',
      author: 'Pablito Perez',
      price: 20,
      photoUrl: 'https://loremflickr.com/320/240/books',
    },
    {
      id: 11,
      userId: 2,
      title: 'Las flores del campo',
      author: 'Maria Sonsoles',
      price: 10,
      photoUrl: 'https://loremflickr.com/320/240/flowers',
    },
    {
      id: 12,
      userId: 3,
      title: 'Mis canciones',
      author: 'Juanito Valderrama',
      price: 30,
      photoUrl: 'https://loremflickr.com/320/240/songs',
    },
  ];

  constructor() {}

  getAll(): Book[] {
    return this.books;
  }

  getOne(id: number): Book {
    const book = this.books.find((book: Book) => book.id === id);
    return book;
  }

  add(book: Book): void {
    this.books.push(book);
  }

  delete(id: number): boolean {
    const index = this.books.findIndex((book: Book) => book.id === id);
    if (index < 0) return false;
    this.books.splice(index, 1);
    return true;
  }
}
