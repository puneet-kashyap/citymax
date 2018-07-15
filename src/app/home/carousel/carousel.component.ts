import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  images = [
    'https://www.freewebheaders.com/wordpress/wp-content/gallery/bridges/sydney-harbour-bridge-header.jpg',
    'https://www.freewebheaders.com/wordpress/wp-content/gallery/cities/sydney-harbour-australia-header.jpg',
    'https://www.freewebheaders.com/wordpress/wp-content/gallery/cities/cities-travel-world-header-2915.jpg',
    'https://www.freewebheaders.com/wordpress/wp-content/gallery/landmarks-monuments/gate-of-victory-paris-france-header.jpg',
    'https://www.freewebheaders.com/wordpress/wp-content/gallery/cities/long-beach-california-header.jpg',
    'https://www.freewebheaders.com/wordpress/wp-content/gallery/landmarks-monuments/grand-triumphal-colosseum-rome-italy-header.jpg',
    'https://www.freewebheaders.com/wordpress/wp-content/gallery/cities/cities-travel-world-header-2911.jpg',
    'https://www.freewebheaders.com/wordpress/wp-content/gallery/planes/plane-take-off-start-point-header.jpg',
  ]

}
