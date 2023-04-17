import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    mobileNumber: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required)
  });

  city;

  constructor(private route: Router, private commonService: HttpService) { }

  ngOnInit(): void {
  }

  onRegister() {
    console.log(this.registerForm.value)
    if (this.registerForm.valid) {
      this.commonService.register(this.registerForm.value).subscribe(res => {
        console.log(res)
        alert('User registered successfully!')
        this.route.navigate(['login']);
      })
    }
  }

}
