import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { UNCOMPRESSED_IMAGE } from '../../image.const';
import { ImageCompressService } from '../../image-compress.service';

@Component({
  selector: 'app-image-compress',
  templateUrl: './image-compress.component.html',
  styleUrls: ['./image-compress.component.scss']
})
export class ImageCompressComponent {
  imgUrl!: SafeUrl;

  constructor(private ds: DomSanitizer,private ic:ImageCompressService) {}

  ngOnInit() {
    this.reset();
  }

  compress() {
    console.log("compress called");
    this.ic.compressImage(UNCOMPRESSED_IMAGE).subscribe(compressedImage => {
      this.imgUrl = this.ds.bypassSecurityTrustUrl(compressedImage);
    });
  }

  compressWithWorker() {
    console.log("compress WW called");
  }

  reset() {
    this.imgUrl = this.ds.bypassSecurityTrustUrl(UNCOMPRESSED_IMAGE);
  }
}
