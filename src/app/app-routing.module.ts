import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './components/address/address.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "product/details/:id",
    component: ProductDetailsComponent
  },
  {
    path: "",
    component: HomeComponent,
    // pathMatch: 'full'
  },
  {
    path: "checkout",
    component: CheckoutComponent
  },
  {
    path: "profile",
    component: ProfileComponent,
    children: [
      {
        path: "",
        redirectTo: 'details',
        pathMatch: 'full'
      },
      {
        path: "details",
        component: UserDetailsComponent
      },
      {
        path: "address",
        component: AddressComponent
      },
      {
        path: "order",
        component: OrdersComponent
      },
      {
        path: "setting",
        component: SettingsComponent
      }
    ]
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
