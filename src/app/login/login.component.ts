import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ng-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  passwordControl: FormControl;
  emailControl: FormControl;
  token: string;
  status: string;
  message: string;

  static isValidEmail(control: FormControl) {
    const email_regexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    return email_regexp.test(control.value) ? null : {
      invalidEmail: true
    };
  }

  constructor(fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.passwordControl = fb.control('', [Validators.required, Validators.minLength(6)]);
    this.emailControl = fb.control('', [Validators.required, LoginComponent.isValidEmail]);

    this.userForm = fb.group({
      email: this.emailControl,
      password: this.passwordControl
    });
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.userForm.value)
      .subscribe(
        response  => {
          console.log(response);
          if (response === true) {
            this.router.navigate(['/admin']);
          } else {
            this.status = "error";
            this.message = "Username or password is incorrect";
          }
        },
        error =>  {
          console.log(<any>error);
          this.status = "error";
          this.message = error['message'];
        }
      );
  }
}
