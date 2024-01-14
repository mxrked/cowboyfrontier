/**
 *
 *  This is the CartQuantity object
 *
 */

export default class CartQuantity {
  constructor(quantityID, quantityAmount) {
    this._quantityID = quantityID;
    this._quantityAmount = quantityAmount;
  }

  setQuantityID(quantityID) {
    this._quantityID = quantityID;
  }
  setQuantityAmount(quantityAmount) {
    this._quantityAmount = quantityAmount;
  }

  getQuantityID() {
    return this._quantityID;
  }
  getQuantityAmount() {
    return this._quantityAmount;
  }
}
