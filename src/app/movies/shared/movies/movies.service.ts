import { CartService } from './../../../cart/shared/cart/cart.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient,
              private cartService: CartService) {}

  fetchMovies() {
    // let cartItems = null;
    // let productsList = null;
    // const url = 'https://www.omdbapi.com/?apikey=a567cf6c&s=love&type=movie';
    // this.http.get('./assets/order-item.json').subscribe(res => {
    //     productsList = res;
    // });
    // cartItems = this.cartService.getUserCart();
    return this.http.get('./assets/order-item.json');
    //  return this.http.get(url);
  }

  addCart(product) {
    this.cartService.addToCart(product);
  }
}
