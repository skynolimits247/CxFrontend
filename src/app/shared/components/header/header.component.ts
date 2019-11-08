import { CartService } from './../../../cart/shared/cart/cart.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  item: number;
  constructor(private userCart: CartService) { }

  ngOnInit() {
    this.item = this.userCart.getUserCart().length;
    this.userCart.$CartUpdated.subscribe((res: any) => {
      this.item = res.length;
    });
  }
}
