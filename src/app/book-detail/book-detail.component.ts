import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  public activeBook: any;

  constructor(private booksService: BooksService) { 
     this.activeBook = this.booksService.getActiveBook();
     this.booksService.subscribe(this);
   }

  ngOnInit(): void {
  }

  notify() {
    this.activeBook = this.booksService.getActiveBook();
  }

  deleteBook() {
    this.activeBook = {name: ''};
    this.booksService.deleteBook(this.activeBook);
  }
}
