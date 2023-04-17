import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { LocalDataService } from 'src/app/services/local-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  constructor(private route: Router, private localDataService: LocalDataService, private commonService: HttpService) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.commonService.login(this.loginForm.value).subscribe(res => {
      this.route.navigate(['home']);
      this.localDataService.isLoggedin.next(true);
    })
  }

}
