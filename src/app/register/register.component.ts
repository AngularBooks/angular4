import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'ng-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  passwordForm: FormGroup;
  passwordControl: FormControl;
  confirmationControl: FormControl;
  nameControl: FormControl;
  emailControl: FormControl;
  status: string;
  message: string;
  errors: any;

  static isValidEmail(control: FormControl) {
    const email_regexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    return email_regexp.test(control.value) ? null : {
      invalidEmail: true
    };
  }

  static samePassword(group: FormGroup) {
    const password = group.get('password').value;
    const password_confirmation = group.get('password_confirmation').value;
    return password === password_confirmation ? null : {
      invalidPassword: true
    };
  }

  constructor(fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.passwordControl = fb.control('', [Validators.required, Validators.minLength(6)]);
    this.confirmationControl = fb.control('', [Validators.required, Validators.minLength(6)]);
    this.nameControl = fb.control('', [Validators.required, Validators.minLength(3)]);
    this.emailControl = fb.control('', [Validators.required, RegisterComponent.isValidEmail]);

    this.passwordForm = fb.group ({
        password: this.passwordControl,
        password_confirmation: this.confirmationControl
      }, {validator: RegisterComponent.samePassword }
    );

    this.userForm = fb.group({
      email: this.emailControl,
      name: this.nameControl,
      passwordForm: this.passwordForm
    });
  }

  ngOnInit() {
  }

  registerUser() {
    this.authService.register(this.userForm.value)
      .subscribe(
        response  => {

          const user = response.user;

          if(user) {
            console.log("A new user has been created");
            this.status = "success";
            this.message = response['message'];
            this.router.navigate(['/admin']);
          } else {
            this.errors = response.errors;
          }
        },
        error =>  console.log(<any>error));
  }

}
