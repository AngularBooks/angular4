import {Component, Input, OnInit} from '@angular/core';
import {Image} from '../../models/image';

@Component({
  selector: 'ng-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  @Input() selectedImage: Image;

  constructor() { }

  ngOnInit() {
  }

}
