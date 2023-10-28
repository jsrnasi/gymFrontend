import { Directive, ElementRef, Input, OnInit } from '@angular/core';
//import * as $ from 'jquery'; // Import jQuery
//import 'fancybox'; // Import Fancybox
//import 'fancybox/dist/css/jquery.fancybox.min.css'; // Import Fancybox CSS

@Directive({
  selector: '[appFancybox]'
})
export class FancyboxDirective {

  @Input()
  appFancybox!: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    // $(this.el.nativeElement).fancybox({
    //   href: this.appFancybox,
    //   type: 'iframe',
    //   // Add more Fancybox options here as needed
    // });
  }
}