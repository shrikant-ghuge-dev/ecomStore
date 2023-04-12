import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {
  cartCount = new BehaviorSubject(0);
  cartCount$ = this.cartCount.asObservable();

  constructor() { }
}
