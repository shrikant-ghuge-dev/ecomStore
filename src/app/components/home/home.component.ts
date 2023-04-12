import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  priceSlider: number = 0;
  value3;
  products = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  priceMin = [];
  priceMax = [];
  custRatings = [{}, {}, {}, {}];
  checked = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onProductClick() {
    this.router.navigate(['/product/details']);
  }

}
