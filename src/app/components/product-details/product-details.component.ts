import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataService } from 'src/app/services/local-data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  val2: number = 3;
  itemCount: number = 1;
  cartItemCount = 1;
  imgOptions = [{}, {}, {}];
  cartProducts = [{}, {}, {}];
  openCart = false;
  products = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  reviews = [{}, {}, {}];

  responsiveOptions;


  constructor(private localDataService: LocalDataService, private route: Router) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
  }

  addItemToCart() {
    let cartCount;
    this.localDataService.cartCount$.subscribe(count => {
      cartCount = count;
    });
    this.localDataService.cartCount.next(cartCount + 1);
  }

  itemCountDecEvent() {
    if (this.itemCount === 1) {
      this.route.navigate(['/']);
    }
    this.itemCount--;
  }

  itemCountIncEvent() {
    this.itemCount++;
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

  onCheckout() {
    this.route.navigate(['checkout']);
  }

  onAddReview() { }

}
