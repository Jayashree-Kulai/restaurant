import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/service/menu.service';
import { Cart } from '../../interface/cart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public actions = ['English', 'Kannada', 'Hindi']
  public dropdownItem: string;
  cart: Cart[];
  cartCount: number = 0;

  constructor(private menuService: MenuService) {
    this.dropdownItem = this.actions[0];
    this.cart = [];
  }

  ngOnInit(): void {
    this.getCartItems();
  }

  changeValue(item: string) {
    this.dropdownItem = item;
  }
  getCartItems(): void {
    this.cart = this.menuService.getCartItems();
    this.cartCount= this.cart.length;
    console.log("cartcount...",this.cartCount)
  }
  

}
