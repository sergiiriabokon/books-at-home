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
  }

  ngOnInit(): void {
    console.log(this.booksService.getBooks());
  }

  onBookClicked(book: any): void {
    console.log(book.name + "book is clicked");
    this.booksService.setActiveBook(book);
  }

}
