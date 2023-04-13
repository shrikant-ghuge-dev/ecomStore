import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { LocalDataService } from 'src/app/services/local-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartCount;

  constructor(private localDataService: LocalDataService, private httpService: HttpService) { }

  ngOnInit(): void {
    // this.httpService.getUsers().subscribe(res => {

    // })
    this.localDataService.cartCount$.subscribe(res => {
      this.cartCount = res;
    })
  }

  onCartClick() {
    this.localDataService.isCartPanelOpen.next(true);
  }

}
