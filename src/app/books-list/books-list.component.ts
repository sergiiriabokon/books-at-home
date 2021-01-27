import { Component, OnInit  } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  books;

  constructor(private booksService: BooksService) { 
    this.books = this.booksService.getBooks();
    this.booksService.subscribe(this);
  }

  ngOnInit(): void {
  }

  notify() {
    this.books = this.booksService.getBooks();
  }

  onBookClicked(book: any): void {
    this.booksService.setActiveBook(book);
  }

}
