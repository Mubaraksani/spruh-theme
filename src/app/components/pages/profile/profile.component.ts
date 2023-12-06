import { Component, OnInit } from '@angular/core';
import { TimeZone } from 'src/app/shared/data/pages/profile';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { GridLayout, Image, ModalGalleryRef, ModalGalleryService, PlainGalleryStrategy, PlainLibConfig } from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  timeZone = TimeZone;
  public images: Image[] = [
    new Image(
      1,
      { //modal
        img: './assets/img/media/1.jpg',
        title: '',
      }
    ),
    new Image(
      2,
      { //modal
        img: './assets/img/media/2.jpg',
        title: '',
      }
    ),
    new Image(
      3,
      { //modal
        img: './assets/img/media/3.jpg',
        title: '',
      }
    ),
    new Image(
      4,
      { //modal
        img: './assets/img/media/4.jpg',
        title: '',
      }
    ),
    new Image(
      5,
      { //modal
        img: './assets/img/media/5.jpg',
        title: '',
      }
    ),
    new Image(
      6,
      { //modal
        img: './assets/img/media/6.jpg',
        title: '',
      }
    ),
    new Image(
      7,
      { //modal
        img: './assets/img/media/7.jpg',
        title: '',
      }
    ),
    new Image(
      8,
      { //modal
        img: './assets/img/media/8.jpg',
        title: '',
      }
    ),
    new Image(
      9,
      { //modal
        img: './assets/img/media/9.jpg',
        title: '',
      }
    ),
    new Image(
      10,
      { //modal
        img: './assets/img/media/10.jpg',
        title: '',
      }
    ),
    new Image(
      11,
      { //modal
        img: './assets/img/media/11.jpg',
        title: '',
      }
    ),
    new Image(
      12,
      { //modal
        img: './assets/img/media/12.jpg',
        title: '',
      }
    ),
  ]

  constructor(private modalGalleryService: ModalGalleryService) {}

  ngOnInit(): void {
  }

  libConfigPlainGalleryGrid: PlainLibConfig = {
    plainGalleryConfig: {
      strategy: PlainGalleryStrategy.GRID,
      layout: new GridLayout({ width: '33%', height: '33%' }, { length: 3, wrap: true })
    }
  };

  onShow(id: number, index: number, images: Image[] = this.images): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images,
      currentImage: images[index]
    }) as ModalGalleryRef;
  }
}
