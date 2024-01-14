/**
 *
 *  This is the function that gets all the cart items by their names and quantities
 *
 */

import CartItem from "@/assets/data/classes/CartItem";
import CartQuantity from "@/assets/data/classes/CartQuantity";
import CartPrice from "@/assets/data/classes/CartPrice";
import DeclareStorageVariable from "../storage/DeclareStorageVariable";
import RemoveStorageVariable from "../storage/RemoveStorageVariable";
import DisplayCartData from "./DisplayCartData";

function removeDuplicates(array, prop) {
  const UNIQUE_MAP = new Map();

  // Filter the array, keeping only the first occurrence of each property value
  const UNIQUE_ARRAY = array.filter((item) => {
    const PROP_VALUE = item[prop];
    if (!UNIQUE_MAP.has(PROP_VALUE)) {
      UNIQUE_MAP.set(PROP_VALUE, true);
      return true;
    }
    return false;
  });

  return UNIQUE_ARRAY;
}

function addingItemsToArray(data, array) {
  data.forEach((item) => {
    if (!array.includes(item)) {
      array.push(item);
    }
  });
}

export default function SaveCartItems(foodData, toyData, housingData) {
  const ALL_FOOD_ITEMS = [];
  const ALL_TOY_ITEMS = [];
  const ALL_HOUSING_ITEMS = [];
  const ALL_STORE_ITEMS = [];
  const USER_CART_ITEMS = [];
  const USER_CART_QUANTITIES = [];
  const USER_CART_SUBTOTALS = [];

  // Adding all type of items to their respected array
  addingItemsToArray(foodData, ALL_FOOD_ITEMS);
  addingItemsToArray(toyData, ALL_TOY_ITEMS);
  addingItemsToArray(housingData, ALL_HOUSING_ITEMS);

  // foodData.forEach((item) => {
  //   if (!ALL_FOOD_ITEMS.includes(item)) {
  //     ALL_FOOD_ITEMS.push(item);
  //   }
  // });
  // toyData.forEach((item) => {
  //   if (!ALL_TOY_ITEMS.includes(item)) {
  //     ALL_TOY_ITEMS.push(item);
  //   }
  // });
  // housingData.forEach((item) => {
  //   if (!ALL_HOUSING_ITEMS.includes(item)) {
  //     ALL_HOUSING_ITEMS.push(item);
  //   }
  // });

  // Adding all items to one array
  addingItemsToArray(ALL_FOOD_ITEMS, ALL_STORE_ITEMS);
  addingItemsToArray(ALL_TOY_ITEMS, ALL_STORE_ITEMS);
  addingItemsToArray(ALL_HOUSING_ITEMS, ALL_STORE_ITEMS);
  // ALL_FOOD_ITEMS.forEach((item) => {
  //   if (!ALL_STORE_ITEMS.includes(item)) {
  //     ALL_STORE_ITEMS.push(item);
  //   }
  // });
  // ALL_TOY_ITEMS.forEach((item) => {
  //   if (!ALL_STORE_ITEMS.includes(item)) {
  //     ALL_STORE_ITEMS.push(item);
  //   }
  // });
  // ALL_HOUSING_ITEMS.forEach((item) => {
  //   if (!ALL_STORE_ITEMS.includes(item)) {
  //     ALL_STORE_ITEMS.push(item);
  //   }
  // });

  // Adding items, item quantities, item prices to respected arrays

  ALL_STORE_ITEMS.forEach((item) => {
    if (localStorage.getItem("Item Name: " + item.productName)) {
      if (localStorage.getItem(item.productName + " Quantity")) {
        const CART_ITEM = new CartItem();
        // const CART_QUANTITY = new CartQuantity();

        CART_ITEM.setItemID(item.productID);
        CART_ITEM.setItemName(
          localStorage.getItem("Item Name: " + item.productName)
        );
        CART_ITEM.setItemImg(item.productImg);
        CART_ITEM.setItemQuantity(
          localStorage.getItem(item.productName + " Quantity")
        );
        CART_ITEM.setItemPrice(item.productPrice);

        // CART_QUANTITY.setQuantityID(CART_ITEM.getItemID() + "_QUANTITY");
        // CART_QUANTITY.setQuantityAmount(CART_ITEM.getItemQuantity());

        USER_CART_ITEMS.push(CART_ITEM);
        // USER_CART_QUANTITIES.push(CART_QUANTITY);
      }
    }
  });
  const GLOBAL_USER_CART_ITEMS = removeDuplicates(USER_CART_ITEMS, "_itemName");

  GLOBAL_USER_CART_ITEMS.forEach((item) => {
    const CART_QUANTITY = new CartQuantity();

    CART_QUANTITY.setQuantityID(item.getItemID() + "_QUANTITY");

    CART_QUANTITY.setQuantityAmount(item.getItemQuantity());

    USER_CART_QUANTITIES.push(CART_QUANTITY);
  });
  const GLOBAL_USER_CART_QUANTITIES = removeDuplicates(
    USER_CART_QUANTITIES,
    "_quantityID"
  );

  GLOBAL_USER_CART_ITEMS.forEach((item) => {
    const CART_PRICE = new CartPrice();

    CART_PRICE.setPriceID(item.getItemID() + "_PRICE");
    CART_PRICE.setPriceAmount(item.getItemPrice() * item.getItemQuantity());

    USER_CART_SUBTOTALS.push(CART_PRICE);
  });
  const GLOBAL_USER_CART_SUBTOTALS = removeDuplicates(
    USER_CART_SUBTOTALS,
    "_priceID"
  );

  // Calculating the quantity and total
  let rawQuantities = [];
  let quantityTotal = 0;
  let grandTotal = 0;

  GLOBAL_USER_CART_SUBTOTALS.forEach((subTotal) => {
    grandTotal += subTotal._priceAmount;
  });
  const CONVERTED_GRAND_TOTAL = grandTotal
    .toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })
    .replace("$", "");

  GLOBAL_USER_CART_QUANTITIES.forEach((quantity) => {
    rawQuantities.push(quantity._quantityAmount);
  });
  const CONVERTED_QUANTITIES = rawQuantities.map((str) => Number(str));

  CONVERTED_QUANTITIES.forEach((quantity) => {
    quantityTotal += quantity;
  });

  // Setting localStorage variables
  if (GLOBAL_USER_CART_ITEMS.length > 0) {
    if (localStorage.getItem("Cart Data") === "[Empty]") {
      RemoveStorageVariable("local", "Cart Data");
    }

    DeclareStorageVariable(
      "local",
      "Cart Data",
      JSON.stringify(GLOBAL_USER_CART_ITEMS)
    );
  } else {
    if (
      localStorage.getItem("Cart Data") ===
      JSON.stringify(GLOBAL_USER_CART_ITEMS)
    ) {
      RemoveStorageVariable("local", "Cart Data");
    }

    DeclareStorageVariable("local", "Cart Data", "[Empty]");
  }
  DeclareStorageVariable("local", "Cart Quantity", quantityTotal);
  DeclareStorageVariable("local", "Cart Total Price", CONVERTED_GRAND_TOTAL);

  // Logging cart data
  // console.log(ALL_STORE_ITEMS);
  if (localStorage.getItem("Cart Data") !== "[Empty]") {
    console.log("Cart Items: ");
    const PARSED_CART_ITEMS = JSON.parse(localStorage.getItem("Cart Data"));
    console.log(PARSED_CART_ITEMS);
  } else {
    console.log("Cart Items: [Empty]");
  }
  console.log("Cart Quantity: " + quantityTotal);
  console.log("Cart Grand Total: $" + CONVERTED_GRAND_TOTAL);

  const CART_DATA = { quantityTotal: quantityTotal };

  DisplayCartData(CART_DATA);
}
