import { CartService } from './shared/cart/cart.service';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  UserCart: any;
  SubTotal: number;
  TaxApplicable: number;
  BillableAmount: number;
  constructor(
    private getCart: CartService,
    private router: Router,
  ) {
    this.SubTotal = 0;
    this.TaxApplicable = 0;
    this.BillableAmount = 0;
  }

  ngOnInit() {
    this.UserCart = this.getCart.getUserCart();
    // for (var index = 0; index < this.UserCart.length; index++) {
    //   this.SubTotal += this.UserCart[index].TotalPrice;
    // }
    for (const cartItem of this.UserCart) {
      this.SubTotal += cartItem.TotalPrice;
    }
    this.TaxApplicable = this.SubTotal / 10;
    this.BillableAmount = this.SubTotal + this.TaxApplicable;
  }
  checkout() {
    this.getCart.checkingOut().subscribe((res: any) => {
      alert('Your Order Number is' + res);
      this.getCart.resetCart();
      this.router.navigate(['/']);
    },
    (err) => {
      console.log(err);
      alert('Oops!..Something went wrong please try again..!!');
    });
  }
}
