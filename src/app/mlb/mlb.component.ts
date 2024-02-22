import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { Iproduct } from '../modules/listproduct.components';

@Component({
  selector: 'app-mlb',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './mlb.component.html',
  styleUrl: './mlb.component.css'
})
export class MlbComponent implements OnInit {
  products: Iproduct[] = [];
  listProduct: Iproduct[] = [];
  filterValue: string = '';
  idSp: number = 0;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get<Iproduct[]>("http://localhost:3000/product").subscribe(
      (res) => {
        this.listProduct = res;
        this.products = this.listProduct.filter(p => p.idLoai === 2);
      },
      (error) => {
        console.error("Error loading products:", error);
      }
    );
  }
  

  filter() {
    // Kiểm tra xem có giá trị trong filterValue hay không
    if (this.filterValue.trim() !== '') {
      // Lọc sản phẩm theo filterValue và gán vào mảng products
      this.products = this.listProduct.filter(p => 
        p.productName.toLowerCase().includes(this.filterValue.toLowerCase()) &&
        p.idLoai === 2
      );
    } else {
      // Nếu filterValue rỗng, hiển thị tất cả sản phẩm có idLoai là 1
      this.products = this.listProduct.filter(p => p.idLoai === 2);
    }
  }
}
