import { Order } from './../../../core/models/order.model';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ORDER_API_CONSTANTS } from '../../../core/constants/api.contants';
import { BASE_URL } from '../../../core/constants/baseUrl.contants';
import { UserProfileService } from '../../../user-profile/shared/services/user-profile.service';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts: any = [];
  order: Order;
  url: any;
  $CartUpdated = new EventEmitter();
  constructor(private http: HttpClient,
              private userService: UserProfileService) {
    this.http.get('./assets/order.json').subscribe((res: any) => {
      this.order = res;
    });
  }

  getUserCart() {
    return this.cartProducts;
  }

  addToCart(product) {
    this.cartProducts.push(product);
    this.$CartUpdated.emit(this.cartProducts);
  }

  checkingOut() {
    this.url = BASE_URL.baseUrl + ORDER_API_CONSTANTS.createOrder;
    this.order.salesOrderLineItems = this.cartProducts;
    this.order.billingAddress = this.userService.getBillingAddress();
    this.order.shippingAddress = this.userService.getShippingAddress();
    return this.http.post(this.url, this.order);
  }
  resetCart() {
    this.cartProducts = [];
    this.$CartUpdated.emit(this.cartProducts);
  }
}
