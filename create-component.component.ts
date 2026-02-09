import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookServiceService } from '../book-service.service';
import { Book } from '../book';

@Component({
  selector: 'app-create-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-component.component.html',
  styleUrl: './create-component.component.css'
})
export class CreateComponentComponent {
  constructor(private bookService:BookServiceService) {}

  bookobj:Book = new Book();

  ngOnInit() {

  }

  save() {
    this.bookService.insertBooks(this.bookobj).subscribe(data => {
      console.log("data " + data.title);
      
    })
  }
}
