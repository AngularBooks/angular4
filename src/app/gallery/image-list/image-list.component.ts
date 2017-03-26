import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Image } from '../../models/image';
import {ImageService} from '../../services/image.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'ng-image-list',
  templateUrl: './image-list.component.html',
  styles: []
})
export class ImageListComponent implements OnInit {
  images: Observable<Image[]>;
  selectedImage: Image;
  @Output() selectedEvent: EventEmitter<Image> = new EventEmitter<Image>();

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImages();
  }

  onSelect(image: Image) {
    this.selectedEvent.emit(image);
  }

}
