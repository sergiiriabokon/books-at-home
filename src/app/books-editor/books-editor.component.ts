import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-editor',
  templateUrl: './books-editor.component.html',
  styleUrls: ['./books-editor.component.css']
})
export class BooksEditorComponent implements OnInit {
  bookName = '';
  bookAuthor = '';
  bookDescription = '';

  constructor(private booksService: BooksService, private router: Router) { }

  ngOnInit(): void {
  }

  submitForm() {
    this.booksService.addBook({name: this.bookName, author: this.bookAuthor, description: this.bookDescription});
    this.router.navigate(['/list-books',{}]);
  }
}
