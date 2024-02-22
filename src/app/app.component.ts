import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkyComponent } from './dangky/dangky.component';
import { HomeComponent } from './home/home.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ConserveComponent } from './conserve/conserve.component';
import { MlbComponent } from './mlb/mlb.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,DangnhapComponent,DangkyComponent,HomeComponent,LienheComponent,ListproductComponent,NotfoundComponent
  ,RouterModule,FormsModule,ProductComponent,HttpClientModule,ProductdetailComponent,ConserveComponent,MlbComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ASMGD1';
}
