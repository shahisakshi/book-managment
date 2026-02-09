import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  baseUrl="http://localhost:8081/books"
  constructor(private httpClient:HttpClient) { }

  insertBooks(b:Book):Observable<Book> {
    return this.httpClient.post<Book>(this.baseUrl+"/addBooks",b);
  }

  retrieveBooks():Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.baseUrl+"/getBooks");
  }
}
