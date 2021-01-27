import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books-editor',
  templateUrl: './books-editor.component.html',
  styleUrls: ['./books-editor.component.css']
})
export class BooksEditorComponent implements OnInit {
  bookName = '';
  bookAuthor = '';

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
  }

  submitForm() {
    console.log('submit clicked');
    this.booksService.addBook(this.bookName, this.bookAuthor);
  }
}
