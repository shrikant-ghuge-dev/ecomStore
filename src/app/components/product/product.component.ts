import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product;
  baseUrl = "http://localhost:4000/";

  constructor() { }

  ngOnInit(): void {
  }

}
