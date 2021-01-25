import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/service/menu.service';
import { Router } from '@angular/router';
import { Recommended } from '../../interface/recommended';
import { Appetizer } from '../../interface/appetizer';
import { Soup } from '../../interface/soup';
import { Cart } from '../../interface/cart';
import { formatNumber } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  recommendedList: Recommended[];
  appetizerList: Appetizer[];
  soupList: Soup[];
  cart: Cart[];

  count: number = 1;
  cartCount: number = 0;
  amount: string = "0";
  constructor(private router: Router, private menuService: MenuService) {
    this.recommendedList = [];
    this.appetizerList = [];
    this.soupList = [];
    this.cart = [];
  }

  ngOnInit(): void {
    this.getAllRecommended();
    this.getAllAppetizers();
    this.getAllSoups();
    this.getCartItems();
    setInterval(() => {
      this.toPay();
    }, 1000);

  }

  toPay(): void {
    let amount = 0;
    for (var k = 0; k < this.cart.length; k++) {
      let itemPrice = Number(this.cart[k].price.substring(3));
      amount += itemPrice * this.cart[k].count;
    }
    this.amount = amount.toFixed(2);
    console.log(this.amount);
  }

  getAllRecommended(): void {
    this.recommendedList = this.menuService.getAllRecommended();
  }

  getAllAppetizers(): void {
    this.appetizerList = this.menuService.getAllAppetizers();

  }

  getAllSoups(): void {
    this.soupList = this.menuService.getAllSoups();

  }

  getCartItems(): void {
    this.cart = this.menuService.getCartItems();
    console.log("cartcount...", this.cart.length)
  }

  addRecommendedToCart(item: Recommended): void {
    item.inCart = "Already in Cart";
    let found: Boolean = false;
    item.addButtonText = "ADD AGAIN";
    const tempItem: Cart = {
      title: item.title,
      price: item.price,
      count: 1
    };

    for (var k = 0; k < this.cart.length; k++) {
      if (this.cart[k].title == item.title) {
        found = true;
        this.cart[k].count++;
        console.log("Already in Cart at", k);
        return;
      }
    }

    this.cart.unshift(tempItem);
  }

  addAppetizerToCart(item: Appetizer): void {
    let found: Boolean = false;
    item.addButtonText = "ADD AGAIN";
    const tempItem: Cart = {
      title: item.title,
      price: item.price,
      count: 1
    };

    for (var k = 0; k < this.cart.length; k++) {
      if (this.cart[k].title == item.title) {
        found = true;
        this.cart[k].count++;
        console.log("Already in Cart at", k);
        return;
      }
    }

    this.cart.unshift(tempItem);
  }

  addSoupToCart(item: Appetizer): void {
    let found: Boolean = false;
    item.addButtonText = "ADD AGAIN";
    const tempItem: Cart = {
      title: item.title,
      price: item.price,
      count: 1
    };

    for (var k = 0; k < this.cart.length; k++) {
      if (this.cart[k].title == item.title) {
        found = true;
        this.cart[k].count++;
        console.log("Already in Cart at", k);
        return;
      }
    }

    this.cart.unshift(tempItem);
  }

  incrementItemCount(item: Cart): void {
    item.count++;
  }

  decrementItemCount(item: Cart): void {
    if (item.count != 1) {
      item.count--;
    }
  }

  remove(food: Cart): void {
    this.cart.forEach((item, index) => {
      if (item === food) {
        this.cart.splice(index, 1)
      }
    })

    for (var k = 0; k < this.recommendedList.length; k++) {
      if (this.recommendedList[k].title == food.title) {
        this.recommendedList[k].addButtonText = "ADD";
        this.recommendedList[k].inCart = "";
        return;
      }
    }

    for (var k = 0; k < this.appetizerList.length; k++) {
      if (this.appetizerList[k].title == food.title) {
        this.appetizerList[k].addButtonText = "ADD";
        return;
      }
    }

    for (var k = 0; k < this.soupList.length; k++) {
      if (this.soupList[k].title == food.title) {
        this.soupList[k].addButtonText = "ADD";
        return;
      }
    }

  }

  clearCart(): void {
    this.cart.splice(0, this.cart.length);
  }

}
