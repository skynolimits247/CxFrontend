import { Address } from './index';
import { OrderItem } from './index';

export interface Order {
  originalOrderNumber: number;
  frontOfficeOrderNumber: number;
  customerId: number;
  orderType: string;
  sourceChannelCode: string;
  distributionCenterCode: string;
  customerRequestedDate: Date;
  shippingAddress: Address;
  billingAddress: Address;
  orderPriorityCode: string;
  salesOrderLineItems: OrderItem[];
}
