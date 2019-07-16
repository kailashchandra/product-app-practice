import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  item = [];

  addItem(product) {
    this.item.push(product);
  }

  giveItems() {
    return this.item;
  }

  clearCart() {
    this.item = [];
    return this.item;
  }
}