import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-retrieve',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './retrieve.component.html',
  styleUrl: './retrieve.component.css'
})
export class RetrieveComponent {
  books: Book[] = [];

  constructor(private bookService:BookServiceService) {}

  ngOnInit() {
    this.bookService.retrieveBooks().subscribe(data => 
    {
      this.books = data;
    }
    )
  }

}
