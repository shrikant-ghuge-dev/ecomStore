import { Component, OnInit } from '@angular/core';
import { LocalDataService } from 'src/app/services/local-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartCount;

  constructor(private localDataService: LocalDataService) { }

  ngOnInit(): void {
    this.localDataService.cartCount$.subscribe(res => {
      this.cartCount = res;
    })
  }

}
