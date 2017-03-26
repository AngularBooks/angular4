import { Injectable } from '@angular/core';
import {Image} from '../models/image';
import {Http, Response} from '@angular/http';
import 'rxjs/RX';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ImageService {

  constructor(private http:Http) {
  }

  getImages(): Observable<Image[]> {
    return this.http.get('http://angularbook.app/api/v1/images')
      .map((response: Response) => response.json());
  }

}
