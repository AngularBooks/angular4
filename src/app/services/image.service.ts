import { Injectable } from '@angular/core';
import {Image} from '../models/image';

@Injectable()
export class ImageService {

  images: Image[] = [
    new Image('1', 'First image', 'First image description', 'https://angularbooks.com/img/angular4/img1.jpg', 'https://angularbooks.com/img/angular4/img1-l.jpg'),
    new Image('2', 'Second image', 'Second image description', 'https://angularbooks.com/img/angular4/img2.jpg', 'https://angularbooks.com/img/angular4/img2-l.jpg'),
    new Image('3', 'Third image', 'Third image description', 'https://angularbooks.com/img/angular4/img3.jpg', 'https://angularbooks.com/img/angular4/img3-l.jpg'),
    new Image('4', 'Fourth image', 'Fourth image description', 'https://angularbooks.com/img/angular4/img4.jpg', 'https://angularbooks.com/img/angular4/img4-l.jpg'),
    new Image('5', 'Fifth image', 'Fifth image description', 'https://angularbooks.com/img/angular4/img5.jpg', 'https://angularbooks.com/img/angular4/img5-l.jpg'),
    new Image('6', 'Sixth image', 'Sixth image description', 'https://angularbooks.com/img/angular4/img6.jpg', 'https://angularbooks.com/img/angular4/img6-l.jpg'),
    new Image('7', 'Seventh image', 'Seventh image description', 'https://angularbooks.com/img/angular4/img7.jpg', 'https://angularbooks.com/img/angular4/img7-l.jpg'),
    new Image('8', 'Eighth image', 'Eighth image description', 'https://angularbooks.com/img/angular4/img8.jpg', 'https://angularbooks.com/img/angular4/img8-l.jpg'),
  ];

  constructor() { }

  getImages() {
    return this.images;
  }
}
