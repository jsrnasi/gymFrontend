import { Component, OnInit, Renderer2} from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    Aos.init()
  }


  scrollToTop() {
    // Use the Renderer2 service to perform a smooth scroll to the top of the page
    if (this.renderer && this.renderer.setStyle) {
      this.renderer.setStyle(document.body, 'scrollBehavior', 'smooth');
      window.scrollTo(0, 0);
      this.renderer.removeStyle(document.body, 'scrollBehavior');
    } else {
      window.scrollTo(0, 0);
    }
  }

}
