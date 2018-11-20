import { Component, OnInit } from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  images = [
    require('../../../assets/images/carousel/hampton-court-palace-london-uk-header-min.jpg'),
    require('../../../assets/images/carousel/sydney-harbour-bridge-header-min.jpg'),
    require('../../../assets/images/carousel/sydney-harbour-australia-header-min.jpg'),
    require('../../../assets/images/carousel/cities-travel-world-header-2915-min.jpg'),
    require('../../../assets/images/carousel/long-beach-california-header-min.jpg'),
    require('../../../assets/images/carousel/grand-triumphal-colosseum-rome-italy-header-min.jpg'),
    require('../../../assets/images/carousel/cities-travel-world-header-2911-min.jpg')
  ];
}
