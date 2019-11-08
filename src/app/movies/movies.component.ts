import { CartService } from './../cart/shared/cart/cart.service';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from './shared/movies/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  products: any;
  cartItems = this.cartService.getUserCart();
  imageUrl =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjP162BhHtQAKFjFf-tSj-GL-Z3Rjq1B-v6yaG-FLIvAMIrnoxJQ&s';
  constructor(
    private moviesService: MoviesService,
    private cartService: CartService
  ) {}

  getMovies() {
    this.moviesService.fetchMovies().subscribe(data => {
      this.products = data;
      for (const product of this.products) {
          for (const cart of this.cartItems) {
              if (product.productCode === cart.productCode) {
                  product.requiredQuantity = cart.requiredQuantity;
              }
          }
       }
    });
  }
  ngOnInit() {
    this.getMovies();
  }

  addCart(product) {
    product.requiredQuantity = +product.requiredQuantity + 50;
    product.TotalPrice = 2000;
    this.moviesService.addCart(product);
  }
}
