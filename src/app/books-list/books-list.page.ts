import { Component, OnInit } from '@angular/core';
import {BooksService} from '../books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.page.html',
  styleUrls: ['./books-list.page.scss'],
})
export class BooksListPage implements OnInit {

  constructor(private Books:BooksService, private router :Router) { }

  books = [];

  ngOnInit() {
    this.books = this.Books.getAllBooks();
  }
  changeUrl(user) {
    const name = user.name;
    const url = `books-list/${name}`;
    this.router.navigateByUrl(url);
}
  ionViewDidEnter() {
    this.books = this.Books.getAllBooks();
  }
  

}
