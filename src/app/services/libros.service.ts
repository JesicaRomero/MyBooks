import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root',
})
export class LibrosService {
  public books: Libro[] = [
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

  constructor() {}

  getAll(): Libro[] {
    return this.books;
  }

  getOne(id: number): Libro {
    const book = this.books.find((book: Libro) => book.id === id);
    return book;
  }

  add(book: Libro): void {
    this.books.push(book);
  }

  delete(id: number): boolean {
    const index = this.books.findIndex((book: Libro) => book.id === id);
    if (index < 0) return false;
    this.books.splice(index, 1);
    return true;
  }
}
