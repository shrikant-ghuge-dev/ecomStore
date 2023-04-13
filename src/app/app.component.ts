import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private primengConfig: PrimeNGConfig, public loader: LoaderService) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

}
