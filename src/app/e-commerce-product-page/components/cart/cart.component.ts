import { Component } from '@angular/core';
import { CartServiceService } from '../../Services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  constructor(public cartService: CartServiceService) {}
  OnDelete(productName:string){
    this.cartService.DeleteCartItem(productName);

  }
}
