import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';
import Swiper from 'swiper';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mySwiper1: any;
  mySwiper2: any;
  slidesPerView!: number;

  constructor() { }

  ngOnInit(): void {
    AOS.init();
    this.slidesPerView = this.calculateSlidesPerView(window.innerWidth);
    this.mySwiper1 = new Swiper('.swiper-container1', {
      // Swiper options and configuration here
      slidesPerView: 1,
      spaceBetween: 10
    });


    this.mySwiper2 = new Swiper('.swiper-container2', {
      // Swiper options and configuration here
      slidesPerView: this.slidesPerView,
      spaceBetween: 10
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.slidesPerView = this.calculateSlidesPerView(event.target.innerWidth);
    this.updateSwiperSlidesPerView();
  }


  calculateSlidesPerView(windowWidth: number): number {
    // Define your logic to calculate the appropriate slidesPerView based on window width
    // For example:
    if (windowWidth >= 1200) {
      return 4;
    }
    if (windowWidth >= 991) {
      return 3;
    } else if (windowWidth >= 576) {
      return 2;
    } else {
      return 1;
    }
  }


  updateSwiperSlidesPerView() {
    this.mySwiper2.params.slidesPerView = this.slidesPerView;
    this.mySwiper2.update(); // Update Swiper to reflect changes
  }

}
