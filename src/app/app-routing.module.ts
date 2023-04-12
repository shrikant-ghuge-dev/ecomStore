import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  {
    path: "product/details",
    component: ProductDetailsComponent
  },
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "checkout",
    component: CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
