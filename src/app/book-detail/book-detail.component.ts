import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
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
    this.booksService.deleteBook(this.activeBook);
    this.activeBook = {name: ''};
  }
}
