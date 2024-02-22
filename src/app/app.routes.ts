import { Routes,ActivatedRoute} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkyComponent } from './dangky/dangky.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ConserveComponent } from './conserve/conserve.component';
import { MlbComponent } from './mlb/mlb.component';

export const routes: Routes = [
    {path: '',component:HomeComponent},
    {path: 'home',component:HomeComponent},
    {path: 'product',component:ListproductComponent},
    {path: 'conserve',component:ConserveComponent},
    {path: 'mlb',component:MlbComponent},
    {path: 'product/:id',component:ProductdetailComponent},
    {path: 'lienhe',component:LienheComponent},
    {path: 'dangnhap',component:DangnhapComponent},
    {path: 'dangky',component:DangkyComponent},
];

