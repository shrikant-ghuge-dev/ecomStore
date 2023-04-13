import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataService } from 'src/app/services/local-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  selectedValue;
  city;

  constructor(private route: Router, private localDataService: LocalDataService) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.localDataService.isLoggedin.next(false);
    this.route.navigate(["login"]);
  }

}
