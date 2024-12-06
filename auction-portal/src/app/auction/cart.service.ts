import { Injectable } from '@angular/core';
import {AuctionItem} from './auction-item';

interface CartItem {
  id: AuctionItem['id'];
  quantity: number;
  item: AuctionItem;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: CartItem[] = [];

  addAuction(auction: AuctionItem): void {
    const cartItem = this.cartItems.find(item => item.id === auction.id);
    if(cartItem) {
      cartItem.quantity++;
    } else {
      this.cartItems.push({
        id: auction.id,
        quantity: 1,
        item: auction
      });
    }
  }

  getItems(): readonly CartItem[] {
    return this.cartItems;
  }

  getItemsCount(): number {
    return this.cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }
}

// const cartService = new CartService();
// cartService.getItems().push({}) // to nie zadziała bo mamy readonly
