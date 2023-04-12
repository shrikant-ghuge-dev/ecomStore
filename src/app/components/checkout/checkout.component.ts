import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  value6;
  months = [
    {
      label: 'Jan', value: 1
    },
    {
      label: 'Feb', value: 2
    },
    {
      label: 'Mar', value: 3
    },
    {
      label: 'Apr', value: 4
    },
    {
      label: 'May', value: 5
    },
    {
      label: 'Jun', value: 6
    },
    {
      label: 'Jul', value: 7
    },
    {
      label: 'Aug', value: 8
    },
    {
      label: 'Sep', value: 9
    },
    {
      label: 'Oct', value: 10
    },
    {
      label: 'Nov', value: 11
    },
    {
      label: 'Dec', value: 12
    }
  ];
  years = ['1990', '1991'];

  constructor() { }

  ngOnInit(): void {
  }

}
