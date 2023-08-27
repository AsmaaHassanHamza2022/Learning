import { Component, HostListener, Input, OnInit } from '@angular/core';
import { IGallaryItem, IthumbnailImage } from '../../models/interfaces';
import { GallaryMode } from '../../Enums/gallaryMode';
declare var bootstrap: any;

@Component({
  selector: 'app-product-images-gallary',
  templateUrl: './product-images-gallary.component.html',
  styleUrls: ['./product-images-gallary.component.scss'],
})
export class ProductImagesGallaryComponent implements OnInit {
  @Input() gallaryMode: GallaryMode = GallaryMode.Flat;

  public gallaryImages: IGallaryItem[] = [
    {
      mainImage: 'assets/images/E_commerce-product-page/image-product-1.jpg',
      thumbnailImage:
        'assets/images/E_commerce-product-page/image-product-1-thumbnail.jpg',
    },
    {
      mainImage: 'assets/images/E_commerce-product-page/image-product-2.jpg',
      thumbnailImage:
        'assets/images/E_commerce-product-page/image-product-2-thumbnail.jpg',
    },
    {
      mainImage: 'assets/images/E_commerce-product-page/image-product-3.jpg',
      thumbnailImage:
        'assets/images/E_commerce-product-page/image-product-3-thumbnail.jpg',
    },
    {
      mainImage: 'assets/images/E_commerce-product-page/image-product-4.jpg',
      thumbnailImage:
        'assets/images/E_commerce-product-page/image-product-4-thumbnail.jpg',
    },
  ];
  public selectedMainImages: string = '';
  public thumbnailImages: IthumbnailImage[] = [];
  public mode:GallaryMode = GallaryMode.Flat;


  // for gallary Modal logic
  public preventGetNextAction: boolean = false;
  public preventgetPreviousAction: boolean = false;

  ngOnInit(): void {
    this.checkWindowWidth();
    this.selectedMainImages = this.mainImages[0];
    this.thumbnailImages = this.gallaryImages.map((item, i) => {
      if (i == 0) {
        return { image: item.thumbnailImage, selected: true };
      }
      return { image: item.thumbnailImage, selected: false };
    });
    this.checkActionsAvaiablity();
  }
  onChangeMainImage(ImageIndex: number) {
    this.selectedMainImages = this.mainImages[ImageIndex];
    this.changeSelectedThumbnail(ImageIndex);
    this.checkActionsAvaiablity(ImageIndex);
  }

  changeSelectedThumbnail(selectIndex: number) {
    this.thumbnailImages.forEach((item, index) => {
      if (index == selectIndex) {
        item.selected = true;
      } else {
        item.selected = false;
      }
    });
  }
  getPerviousImage() {
    const currentMainImageIndex = this.mainImages.findIndex(
      (item) => item == this.selectedMainImages
    );
    this.preventGetNextAction = false;
    if (currentMainImageIndex == 0) {
      this.preventgetPreviousAction = true;
      return;
    }
    this.preventgetPreviousAction = false;
    this.selectedMainImages = this.mainImages[currentMainImageIndex - 1];
    this.changeSelectedThumbnail(currentMainImageIndex - 1);
  }
  getNextImage() {
    //#region
    /*
      // I have selectedMainImage
      // a- bring index ask
          -last index disable next button
          -not last bring Image with next index
    */
    //#endregion
    const currentMainImageIndex = this.mainImages.findIndex(
      (item) => item == this.selectedMainImages
    );
    this.preventgetPreviousAction = false;

    if (currentMainImageIndex == this.mainImages.length - 1) {
      this.preventGetNextAction = true;

      return;
    }
    this.preventGetNextAction = false;
    this.selectedMainImages = this.mainImages[currentMainImageIndex + 1];
    this.changeSelectedThumbnail(currentMainImageIndex + 1);
  }

  checkActionsAvaiablity(ImageIndex: number = 0) {
    if (ImageIndex == 0) {
      this.preventgetPreviousAction = true;
      this.preventGetNextAction = false;
    } else if (ImageIndex == this.mainImages.length - 1) {
      this.preventgetPreviousAction = false;
      this.preventGetNextAction = true;
    } else {
      this.preventgetPreviousAction = false;
      this.preventGetNextAction = false;
    }
  }
  checkWindowWidth() {
    if (window.innerWidth <= 480) {
      this.mode = GallaryMode.Mobile;
    }else{
      this.mode=this.gallaryMode;
    }
  }

  openModal(){
    if(this.isGallaryInFlatMode){
      var myModal = new bootstrap.Modal(document.getElementById("exampleModal"), {
        backdrop: 'static',
      });
      myModal.show();
    }
    

  }

  // hostlistner method
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkWindowWidth()
  }
  //getter & setters
  get mainImages() {
    return this.gallaryImages.map((item) => item.mainImage);
  }

  get isGallaryInFlatMode() {
    return this.mode == GallaryMode.Flat;
  }
  get isGallaryInModalMode() {
    return this.mode == GallaryMode.Modal;
  }
  get isGallaryInMobileMode() {
    return this.mode == GallaryMode.Mobile;
  }
}
