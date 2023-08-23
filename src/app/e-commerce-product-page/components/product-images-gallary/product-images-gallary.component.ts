import { Component, Input, OnInit } from '@angular/core';
import { IGallaryItem, IthumbnailImage } from '../../models/interfaces';
import { GallaryMode } from '../../Enums/gallaryMode';
import { flush } from '@angular/core/testing';

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


  // for gallary Modal logic
  public preventGetNextAction:boolean=false;
  public preventgetPreviousAction:boolean=false;

  ngOnInit(): void {
    this.selectedMainImages = this.mainImages[0];
    this.thumbnailImages = this.gallaryImages.map((item, i) => {
      if (i == 0) {
        return { image: item.thumbnailImage, selected: true };
      }
      return { image: item.thumbnailImage, selected: false };
    });
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
    const currentMainImageIndex=this.mainImages.findIndex((item)=>item == this.selectedMainImages);
    this.preventGetNextAction=false;
    if(currentMainImageIndex == 0){
      this.preventgetPreviousAction=true;
      return ;
    }
    this.preventgetPreviousAction=false;
    this.selectedMainImages=this.mainImages[currentMainImageIndex-1]
    this.changeSelectedThumbnail(currentMainImageIndex-1)
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
    const currentMainImageIndex=this.mainImages.findIndex((item)=>item == this.selectedMainImages);
    this.preventgetPreviousAction=false;

    if(currentMainImageIndex == this.mainImages.length -1){
      this.preventGetNextAction=true;

      return ;
    }
    this.preventGetNextAction=false;
    this.selectedMainImages=this.mainImages[currentMainImageIndex+1]
    this.changeSelectedThumbnail(currentMainImageIndex+1)
  }

  checkActionsAvaiablity(ImageIndex:number){
    if(ImageIndex == 0){
      this.preventgetPreviousAction=true;
      this.preventGetNextAction=false;
    }else if(ImageIndex == this.mainImages.length -1){
      this.preventgetPreviousAction=false;
      this.preventGetNextAction=true;
    }else{
      this.preventgetPreviousAction=false;
      this.preventGetNextAction=false;
    }

  }
  //getter & setters
  get mainImages() {
    return this.gallaryImages.map((item) => item.mainImage);
  }

  get isGallaryInFlatMode() {
    return this.gallaryMode == GallaryMode.Flat;
  }
  get isGallaryInModalMode() {
    return this.gallaryMode == GallaryMode.Modal;
  }
}
