import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  faCircleXmark = faCircleXmark;

  @Input() book: Book;
  @Output() deleteBookEvent = new EventEmitter<number>();

  deleteBook(id: number) {
    this.deleteBookEvent.emit(id);
  }
}
