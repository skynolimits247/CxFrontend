import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Address } from '../../../core/models/address.model';
@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  shippingAddress: Address = {
    addressType: 'SHIPPING',
    houseNo: '172',
    street: '12',
    city: 'Munich',
    zipCode: '312121',
    state: 'Munich',
    country: 'Germany'
  };
  billingAddress: Address = {
    addressType: 'BILLING',
    houseNo: '172',
    street: '12',
    city: 'Munich',
    zipCode: '312121',
    state: 'Munich',
    country: 'Germany'
  };
  constructor(private http: HttpClient) {}

  getShippingAddress() {
    return this.shippingAddress;
  }

  getBillingAddress() {
    return this.billingAddress;
  }

  updateBillingAddress(address: Address) {
    this.billingAddress = address;
    // console.log(this.billingAddress);
    return true;
  }

  updateShippingAddress(address: Address) {
    this.shippingAddress = address;
    // console.log(this.shippingAddress);
    return true;
  }
}
