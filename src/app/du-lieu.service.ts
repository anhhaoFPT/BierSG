import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DuLieuService {
  constructor(private http: HttpClient) {}

  laySp(id: number = 0) {
    return this.http.get(`http://localhost:3000/product/${id}`);
  }
}
