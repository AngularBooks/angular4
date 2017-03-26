import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/RX';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';
import {AuthHttp} from 'angular2-jwt';

@Injectable()
export class UserService {

  constructor(private http:Http, private authHttp: AuthHttp) { }

  addUser(user: Object): Observable<User[]> {
    return this.authHttp.post('http://angularbook.app/api/v1/users', user)
      .map((response: Response) => response.json())
      .catch((error:any) => Observable.throw(error.json().error || {message:"Server Error"}));
  }

  getUsers(): Observable<User[]> {
    return this.authHttp.get('http://angularbook.app/api/v1/users')
      .map((response: Response) => response.json())
      .catch((error:any) => Observable.throw(error.json().error || {message:"Server Error"}));
  }
}
