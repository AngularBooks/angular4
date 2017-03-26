import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ImageService} from '../../services/image.service';

@Component({
  selector: 'ng-admin-image-delete',
  templateUrl: './admin-image-delete.component.html',
  styleUrls: ['./admin-image-delete.component.css']
})
export class AdminImageDeleteComponent implements OnInit, OnDestroy {
  id: any;
  params: any;

  constructor(private activatedRoute: ActivatedRoute, private imageService: ImageService, private router: Router) { }

  ngOnInit() {
    this.params = this.activatedRoute.params.subscribe(params => this.id = params['id']);
    this.imageService.deleteImage(this.id).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/admin/images']);
      },
      error =>  console.log(<any>error));
  }

  ngOnDestroy() {
    this.params.unsubscribe();
  }

}
