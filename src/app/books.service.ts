import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
books = [
{name : 'The History of Tom Jones',author : 'Henry Fielding'},
{name : 'Pride and Prejudice', author : 'Jane Austen'},
{name : 'The Red and the Black',author : 'Stendhal'},
{name : 'David Copperfield',author : 'Charles Dickens'},
{name : 'Madame Bovary',author : 'Gustave Flaubert'},
{name : 'Moby-Dick',author : 'Herman Melville'},
];
  constructor() { }

  getAllBooks()
  {
    return this.books;
  }
  addBook(name,author)
  {
    this.books.push({name:name,author:author});
  }
  deleteBook(name) {
    this.books = this.books.filter(e => {
      return e.name !== name;
    });
  }
}
