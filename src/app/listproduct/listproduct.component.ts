import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Iproduct } from '../modules/listproduct.components';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listproduct',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {
  products: Iproduct[] = [];
  listProduct: Iproduct[] = [];
  filterValue: string = '';
  idSp: number = 0;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get<Iproduct[]>("http://localhost:3000/product").subscribe(
      (res) => {
        this.products = res;
        this.listProduct = res;
      },
      (error) => {
        console.error("Error loading products:", error);
      }
    );
  }

  filter() {
    this.products = this.listProduct.filter(p => p.productName.toLowerCase().includes(this.filterValue.toLowerCase()));
  }
}
