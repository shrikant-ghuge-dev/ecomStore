import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Observable } from 'rxjs';
import { LoaderService } from './services/loader.service';
import { LocalDataService } from './services/local-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoggedIn;

  constructor(private primengConfig: PrimeNGConfig, public loader: LoaderService, private localDataService: LocalDataService) { }

  ngOnInit() {
    this.isLoggedIn = this.localDataService.isLoggedin$;
    this.primengConfig.ripple = true;
    // this.localDataService.isLoggedin$.subscribe(isLoggedIn => {
    //   this.isLoggedIn = isLoggedIn;
    // })
  }

}
