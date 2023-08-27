import { Component } from '@angular/core';
import { CartServiceService } from '../../Services/cart-service.service';
import { ICartItems } from '../../models/interfaces';

@Component({
  selector: 'app-e-commerce-navbar',
  templateUrl: './e-commerce-navbar.component.html',
  styleUrls: ['./e-commerce-navbar.component.scss'],
})
export class ECommerceNavbarComponent {
  public cartItemsCount:number=0;
  constructor(public cartService: CartServiceService) {
    this.GetproductCount();
  }
  GetproductCount() {
    return this.cartService.cartItems.subscribe((items: ICartItems[]) => {
      this.cartItemsCount=items.reduce((a,b)=>a+b.count,0)
    });
  }
}
