export class OrderItem {
  lineItemNumber: number;
  lineItemOrderStatus: string;
  lineItemOrderDate: Date;
  distributionCenterCode: string;
  productCode: string;
  requiredQuantity: number;
  transportationMode: string;
  salesOrderLineItemNumber: string;
  createdOn: Date;
  modifiedOn: Date;
  sourceOrderNumber: string;
  sourceShipmentNumber: string;

  constructor({
    lineItemNumber = null,
    lineItemOrderStatus = null,
    lineItemOrderDate = null,
    distributionCenterCode = null,
    productCode = null,
    requiredQuantity = null,
    transportationMode = null,
    salesOrderLineItemNumber = null,
    createdOn = null,
    modifiedOn = null,
    sourceOrderNumber = null,
    sourceShipmentNumber = null
  } = {}) {
    this.lineItemNumber = lineItemNumber;
    this.lineItemOrderStatus = lineItemOrderStatus;
    this.lineItemOrderDate = lineItemOrderDate;
    this.distributionCenterCode = distributionCenterCode;
    this.productCode = productCode;
    this.requiredQuantity = requiredQuantity;
    this.transportationMode = transportationMode;
    this.salesOrderLineItemNumber = salesOrderLineItemNumber;
    this.createdOn = createdOn;
    this.modifiedOn = modifiedOn;
    this.sourceOrderNumber = sourceOrderNumber;
    this.sourceShipmentNumber = sourceShipmentNumber;
  }
}
