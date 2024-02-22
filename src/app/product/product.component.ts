import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Iproduct } from '../modules/listproduct.components'
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  listSP: Iproduct[] = [];

  constructor(private h: HttpClient) {
    this.h.get<Iproduct[]>("http://localhost:3000/product").subscribe(
      (res) => {
        // Chỉ lấy 5 sản phẩm ở cuối
        const startIndex = res.length > 5 ? res.length - 5 : 0;
        this.listSP = res.slice(startIndex);
      },
      (error) => {
        console.error("Error loading products:", error);
      }
    );
  }
}
