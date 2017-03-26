import { Component, OnInit } from '@angular/core';
import {AuthService} from './services/auth.service';
import {NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'ng-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;

  constructor(private auth: AuthService, router:Router) {
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        if (this.auth.loggedIn()) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      }
    });
  }
  ngOnInit() {
  }

}
