import { Component, OnInit } from '@angular/core';
import { Address } from '../../core/models/address.model';
import { UserProfileService } from '../shared/services/user-profile.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  billingAddress: FormGroup;
  shippingAddress: FormGroup;
  mockAddress: Address;
  mockShippingAddress: Address;
  stringPattern: any = '[a-zA-Z ]*';
  numberCheck: any = '^[0-9]*$';
  constructor(private fb: FormBuilder, private userService: UserProfileService) {
    this.mockAddress = this.userService.getBillingAddress();
    this.mockShippingAddress = this.userService.getShippingAddress();
    this.createForm();
  }

  ngOnInit() {
        // this.userService.getAddress().subscribe((res: Address) => {
        //   this.mockAddress = res;
        //   console.log(this.mockAddress);
        //   this.createForm();
        // });
  }

  createForm() {
    this.billingAddress = this.fb.group({
      city: [
        this.mockAddress.city,
        Validators.compose([
          Validators.required,
          Validators.pattern(this.stringPattern)
        ])
      ],
      country: [
        this.mockAddress.country,
        Validators.compose([
          Validators.required,
          Validators.pattern(this.stringPattern)
        ])
      ],
      state: [
        this.mockAddress.state,
        Validators.compose([
          Validators.required,
          Validators.pattern(this.stringPattern)
        ])
      ],
      houseNo: [
        this.mockAddress.houseNo,
        Validators.compose([Validators.required])
      ],
      zipCode: [
        this.mockAddress.zipCode,
        Validators.compose([
          Validators.required,
          Validators.pattern(this.numberCheck)
        ])
      ],
      street: [this.mockAddress.street, Validators.compose([Validators.required])]
    });

    this.shippingAddress = this.fb.group({
      city: [
        this.mockShippingAddress.city,
        Validators.compose([
          Validators.required,
          Validators.pattern(this.stringPattern)
        ])
      ],
      country: [
        this.mockShippingAddress.country,
        Validators.compose([
          Validators.required,
          Validators.pattern(this.stringPattern)
        ])
      ],
      state: [
        this.mockShippingAddress.state,
        Validators.compose([
          Validators.required,
          Validators.pattern(this.stringPattern)
        ])
      ],
      houseNo: [
        this.mockShippingAddress.houseNo,
        Validators.compose([Validators.required])
      ],
      zipCode: [
        this.mockShippingAddress.zipCode,
        Validators.compose([
          Validators.required,
          Validators.pattern(this.numberCheck)
        ])
      ],
      street: [
        this.mockShippingAddress.street,
        Validators.compose([Validators.required])
      ]
    });
    // console.log(this.billingAddress);
  }
  onSubmit(billingAddress) {
    if (this.userService.updateBillingAddress(billingAddress)) {
      alert('Successfully changed billing address');
    }
  }
  onSubmitShipping(billingAddress) {
    if (this.userService.updateShippingAddress(billingAddress)) {
      alert('Successfully changed shipping address');
    }
  }
}
