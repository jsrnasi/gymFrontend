import { Component, HostListener, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isClick:Boolean=false
  constructor() { }

  ngOnInit(): void {
    Aos.init()
  }
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    console.log(event.target.innerWidth)
    //this.slidesPerView = this.calculateSlidesPerView(event.target.innerWidth);
    //this.updateSwiperSlidesPerView();
  }


  refreshPage(): void {
 
      window.location.reload();
  }
}
