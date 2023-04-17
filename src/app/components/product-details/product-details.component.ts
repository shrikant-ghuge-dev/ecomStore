import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalDataService } from 'src/app/services/local-data.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  val2: number = 3;
  itemCount: number = 1;
  // isItemDeliveredStatus = false;
  cartItemCount = 1;
  imgOptions = [{}, {}, {}];
  cartProducts = [{}, {}, {}];
  openCart;
  products = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  reviews = [{}, {}, {}];
  isAddCommentVisible = false;

  responsiveOptions;

  //

  productId;
  productDetails;
  ratingValue;
  baseUrl = "http://localhost:4000/";
  imgUrl;


  constructor(private localDataService: LocalDataService, private route: Router, private productService: ProductsService, private router: ActivatedRoute) {
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

    this.router.params.subscribe(params => {
      this.productId = params['id'];
    });
  }

  ngOnInit(): void {
    this.localDataService.isCartPanelOpen$.subscribe(res => {
      this.openCart = res;
    });

    this.productService.getProductDeatils(this.productId).subscribe(res => {
      let productDetails = JSON.parse(res.data);
      this.productDetails = productDetails;
      this.ratingValue = parseInt(this.productDetails.review);
      this.reviews = JSON.parse(this.productDetails.reviews);
      const img = JSON.parse(this.productDetails?.image);
      this.imgUrl = this.baseUrl + img[0]?.image_url;

    })
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

  onAddReview() {
    this.isAddCommentVisible = !this.isAddCommentVisible;
  }

  onSubmitReview() {
    this.reviews.push({});
  }

  onCartOpen() {
    this.openCart = true;
  }

}
