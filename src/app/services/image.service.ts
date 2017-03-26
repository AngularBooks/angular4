import { Injectable } from '@angular/core';
import {Image} from '../models/image';
import {Http, Response} from '@angular/http';
import 'rxjs/RX';
import {Observable} from 'rxjs/Observable';
import {AuthHttp} from 'angular2-jwt';

@Injectable()
export class ImageService {

  constructor(private http: Http, private authHttp: AuthHttp) {  }

  getImage(id: String): Observable<Image[]> {
    return this.authHttp.get('http://angularbook.app/api/v1/images/' + id)
      .map((response: Response) => response.json());
  }

  getImages(): Observable<Image[]> {
    return this.http.get('http://angularbook.app/api/v1/images')
      .map((response: Response) => response.json());
  }

  addImage(image: Object): Observable<Image[]> {
    return this.authHttp.post('http://angularbook.app/api/v1/images', image)
      .map((response: Response) => response.json())
      .catch((error:any) => Observable.throw(error.json().error || {message:"Server Error"} ));
  }

  updateImage(image: Object): Observable<Image[]> {
    const apiUrl = 'http://angularbook.app/api/v1/images';
    const url = `${apiUrl}/${image["id"]}`;
    return this.authHttp.put(url, image)
      .map((response: Response) => response.json())
      .catch((error:any) => Observable.throw(error.json().error || {message:"Server Error"}));
  }

  deleteImage(id: String): Observable<Image[]> {
    let apiUrl = 'http://angularbook.app/api/v1/images';
    let url = `${apiUrl}/${id}`;
    return this.authHttp.delete(url)
      .map((response: Response) => response.json())
      .catch((error:any) => Observable.throw(error.json().error || {message:"Server Error"}));
  }
}
