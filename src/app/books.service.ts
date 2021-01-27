import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private _active: any;
  private _observers: any[] = [];

  private _books = [
    {author: "Ritchie", name: "C porgamming reference"},
    {author: "Gamma", name: "Design patterns"},
    {author: "Grady Booch", name: "Object-oriented analysis and design"}
  ];

  constructor() { 
    this._active = this.getBooks()[0];
  }

  getBooks() {
    return [...this._books]; //shallow copy of references
  }

  getActiveBook() {
    return {...this._active};
  }

  setActiveBook(book: any) {
    this._active = book;
    this._observers.forEach(o => o.notify() );
  }

  subscribe(observer: any) {
    this._observers.push(observer);
  }

  addBook(name: string, author: string) {
    this._books.push( {name, author} ) ;
    this._observers.forEach(o => o.notify() );
  }
}
