import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  mySwiper:any
  constructor() { }

  ngOnInit(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      // Swiper options and configuration here
      slidesPerView: 1,
      //spaceBetween: 10,
    });
  }

}
