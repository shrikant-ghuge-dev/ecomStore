import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  cartProducts = [{}, {}, {}];
  cartItemCount = 1;
  @Input() isRemoveCartItemIcon;
  @Input() isItemDeliveredStatus

  constructor() { }

  ngOnInit(): void {
  }

  cartItemCountInc() {
    this.cartItemCount++;
  }

  cartItemCountDec() {
    if (this.cartItemCount === 1) {
      this.onRemoveProduct();
    }
    this.cartItemCount--;
  }

  onRemoveProduct() {
    this.cartProducts.splice(1, 1);
  }

}
