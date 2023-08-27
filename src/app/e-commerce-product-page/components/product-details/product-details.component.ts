import { Component } from '@angular/core';
import { IProductDetails } from '../../models/interfaces';
import { CartServiceService } from '../../Services/cart-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  public productDetails:IProductDetails={
    brandName:'sneakers company',
    productName:"Fall Limitted Edition sneakers",
    productDescription:'These low-profile sneakers are your perfect casual wear companion ,Featuring adurable rubber outer sole,They wii withstand everthing the weather can offer',
    productPrice:250,
    discount:50,
    productImage:'assets/images/E_commerce-product-page/image-product-1-thumbnail.jpg'
  }
  public productCount:number=1;

  constructor(private cartService:CartServiceService){
    
  }


  get sellingPrice(){
    let discountAmount=Math.floor(this.productDetails.productPrice * (this.productDetails.discount/100));
    return this.productDetails.productPrice - discountAmount;
  }

  onAddToCart(){
    this.cartService.AddTocart(this.productDetails,this.productCount);
  }

  onProductCountChange(count:number){
    this.productCount=count;

  }

}
