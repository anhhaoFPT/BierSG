import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ConserveComponent } from '../conserve/conserve.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ProductComponent,ConserveComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
