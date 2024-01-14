/**
 *
 *  This is the CartItem object
 *
 */

export default class CartItem {
  constructor(itemID, itemName, itemImg, itemQuantity, itemPrice) {
    this._itemID = itemID;
    this._itemName = itemName;
    this._itemImg = itemImg;
    this._itemQuantity = itemQuantity;
    this._itemPrice = itemPrice;
  }

  setItemID(itemID) {
    this._itemID = itemID;
  }
  setItemName(itemName) {
    this._itemName = itemName;
  }
  setItemImg(itemImg) {
    this._itemImg = itemImg;
  }
  setItemQuantity(itemQuantity) {
    this._itemQuantity = itemQuantity;
  }
  setItemPrice(itemPrice) {
    this._itemPrice = itemPrice;
  }

  getItemID() {
    return this._itemID;
  }
  getItemName() {
    return this._itemName;
  }
  getItemImg() {
    return this._itemImg;
  }
  getItemQuantity() {
    return this._itemQuantity;
  }
  getItemPrice() {
    return this._itemPrice;
  }
}
