import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Book {
  name: string;
  author: string;
}

interface EventListener {
  notify(): void;
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private _active: Book = { name: '', author: '' };
  private _observers: EventListener[] = [];
  private _books: Book[] = [];

  constructor(private httpClient: HttpClient) { 
    this.httpClient.
      get('https://jgtbdylysi.execute-api.us-east-1.amazonaws.com/listBooks').
      subscribe( (responseData: any) => this.handleListBooks(responseData) );
  }

  handleListBooks(booksList: Book[]) {
    this._books = booksList;
    this._observers.forEach(o => o.notify() );
  }

  getBooks() {
    return [...this._books]; //shallow copy of references
  }

  getActiveBook() {
    return {...this._active};
  }

  setActiveBook(book: Book) {
    this._active = book;
    this._observers.forEach(o => o.notify() );
  }

  subscribe(observer: EventListener) {
    this._observers.push(observer);
  }

  addBook(book: Book) {
    this._books.push( book ) ;
    this._observers.forEach(o => o.notify() );
  }

}
