import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RatingModule } from 'primeng/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { CounterComponent } from './shared/counter/counter.component';
import { CarouselModule } from 'primeng/carousel';
import { BadgeModule } from 'primeng/badge';
import { LocalDataService } from './services/local-data.service';
import { HomeComponent } from './components/home/home.component';
import { InputTextModule } from 'primeng/inputtext';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartItemComponent } from './shared/cart-item/cart-item.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ReviewComponent } from './shared/review/review.component';
import { SliderModule } from 'primeng/slider';
import { CheckboxModule } from 'primeng/checkbox';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProfileComponent } from './components/profile/profile.component';
import { Interceptor } from './services/http.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RadioButtonModule } from 'primeng/radiobutton';
import { HttpService } from './services/http.service';
import { TabViewModule } from 'primeng/tabview';
import { AddressComponent } from './components/address/address.component';
import { SettingsComponent } from './components/settings/settings.component';
import { OrdersComponent } from './components/orders/orders.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    ProductComponent,
    ProductDetailsComponent,
    LoginComponent,
    RegisterComponent,
    CounterComponent,
    HomeComponent,
    CheckoutComponent,
    CartItemComponent,
    ReviewComponent,
    ProfileComponent,
    AddressComponent,
    SettingsComponent,
    OrdersComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastModule,
    ButtonModule,
    RatingModule,
    FormsModule,
    RippleModule,
    SidebarModule,
    CarouselModule,
    BadgeModule,
    InputTextModule,
    DropdownModule,
    InputTextareaModule,
    SliderModule,
    CheckboxModule,
    ProgressSpinnerModule,
    RadioButtonModule,
    HttpClientModule,
    TabViewModule,
    ReactiveFormsModule
  ],
  providers: [MessageService, LocalDataService, HttpService,
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
