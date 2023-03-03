import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private url = 'http://localhost:3000/books';

  constructor(private http: HttpClient) {}

  getAll(userId: number): Observable<Object> {
    const params = { userId };
    return this.http.get(this.url, { params });
  }

  getOne(userId: number, id: number): Observable<Object> {
    const params = { userId, id };
    return this.http.get(this.url, { params });
  }

  add(book: Book): Observable<Object> {
    return this.http.post(this.url, book);
  }

  delete(id: number): Observable<Object> {
    const params = { id };
    return this.http.delete(this.url, { params });
  }
}
