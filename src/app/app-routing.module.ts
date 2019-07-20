import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import { ProductDetailsComponent} from './product-details/product-details.component';
import { EnvioComponent } from './envio/envio.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'', component: ProductListComponent},
  {path:'products/:productId',component:ProductDetailsComponent},
  {path:'envio',component: EnvioComponent},
  {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
