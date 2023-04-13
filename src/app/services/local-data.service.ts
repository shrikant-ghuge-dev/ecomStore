import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {
  cartCount = new BehaviorSubject(0);
  cartCount$ = this.cartCount.asObservable();

  isCartPanelOpen = new BehaviorSubject(false);
  isCartPanelOpen$ = this.isCartPanelOpen.asObservable();

  isLoggedin = new BehaviorSubject(false);
  isLoggedin$ = this.isLoggedin.asObservable();

  constructor() { }
}
