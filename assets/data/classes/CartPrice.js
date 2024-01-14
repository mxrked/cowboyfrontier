/**
 *
 *  This is the CartPrice object
 *
 */

export default class CartPrice {
  constructor(priceID, priceAmount) {
    this._priceID = priceID;
    this._priceAmount = priceAmount;
  }

  setPriceID(priceID) {
    this._priceID = priceID;
  }
  setPriceAmount(priceAmount) {
    this._priceAmount = priceAmount;
  }

  getPriceID() {
    return this._priceID;
  }
  getPriceAmount() {
    return this._priceAmount;
  }
}
