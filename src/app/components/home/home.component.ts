import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounce, debounceTime, distinctUntilChanged, interval, Subject, Subscription } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  priceSlider: number = 0;
  searchStr = "";
  products;
  priceMin = [];
  priceMax = [];
  custRatings = [{}, {}, {}, {}];
  checked = [];
  selectedRatings;
  public notesModelChanged: Subject<string> = new Subject<string>();
  private notesModelChangeSubscription: Subscription;

  constructor(private router: Router, private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => {
      console.log(JSON.parse(res[0][0].data));
      // JSON.parse(JSON.parse(json).data));
      this.products = JSON.parse(res[0][0].data);
    })

    this.notesModelChangeSubscription = this.notesModelChanged
      .pipe(
        debounceTime(2000),
        distinctUntilChanged()
      )
      .subscribe(newText => {
        this.searchStr = newText;
        this.onSearch(this.searchStr);
      });
  }

  ngOnDestroy() {
    this.notesModelChangeSubscription.unsubscribe();
  }

  onProductClick(productId) {
    this.router.navigate([`/product/details/${productId}`]);
  }

  onSearch(searchStr) {
    this.callToSearchProduct(searchStr, this.selectedRatings);
  }

  callToSearchProduct(searchStr, selectedRatings) {
    this.productService.searchProduct(0, 0, selectedRatings, searchStr).subscribe(res => {
      const productList = JSON.parse(res[0][0]?.data);
      this.products = productList;
    })
  }

  onRating() {
    const selectedRatings = [];
    for (const rating in this.checked) {
      if (this.checked[rating]) {
        selectedRatings.push(parseInt(rating.substring(6))); // extract the index from the key and push it to the array
      }
    }
    this.selectedRatings = ++selectedRatings[0];
    // console.log(this.selectedRatings);
    this.callToSearchProduct(this.searchStr, this.selectedRatings);
  }

}
