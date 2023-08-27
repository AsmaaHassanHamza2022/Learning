import { Injectable } from '@angular/core';
import { ICartItems, IProductDetails } from '../models/interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  private cart$: BehaviorSubject<ICartItems[]> = new BehaviorSubject<
    ICartItems[]
  >([]);
  public cartItems = this.cart$.asObservable();
  private items: ICartItems[] = [];

  constructor() {}

  AddTocart(item: IProductDetails, productCount: number = 1) {
    let cartItem = this.mapProductToCartItem(item,productCount);
    if (this.items.length) {
      const updatedItemIndex = this.items.findIndex(
        (product) => product.productName == item.productName
      );
      if (updatedItemIndex != -1) {
        this.items[updatedItemIndex].count+= productCount;
        this.cart$.next(this.items);
        return;
      }
    }
    this.items.push({ ...item, count: productCount });
    this.cart$.next(this.items);
  }
  DeleteCartItem(productName:string){
     this.items=this.items.filter((item)=>item.productName != productName)
    this.cart$.next(this.items);

    
  }
  public mapProductToCartItem(
    productItem: IProductDetails,
    productCount: number
  ) {
    return {
      ...productItem,
      count: productCount,
    };
  }
}
