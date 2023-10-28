import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
  private _album: Array<any> = [];

  constructor(private _lightbox: Lightbox) {
    const youtubeVideoUrl = 'https://www.youtube.com/watch?v=MLpWrANjFbI';
    const youtubeVideoThumbnail = 'https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg';

    const videoAlbum = {
      src: youtubeVideoUrl,
      caption: 'YouTube Video',
      thumb: youtubeVideoThumbnail
    };

    this._album.push(videoAlbum);
  }

  open(): void {
    // Open lightbox with the YouTube video
    this._lightbox.open(this._album);
  }

  close(): void {
    // Close lightbox programmatically
    this._lightbox.close();
  }

  ngOnInit(): void {
    Aos.init();
  }

}
