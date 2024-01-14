/**
 *
 *  This is used to display the cart data
 *
 */

export default function DisplayCartData(object) {
  // Displaying cart quantity to counters
  if (document.querySelector(".cart-counter")) {
    document.querySelectorAll(".cart-counter").forEach((counter) => {
      if (object.quantityTotal < 100) {
        counter.innerHTML = object.quantityTotal;
      } else {
        counter.innerHTML = "99+";
      }
    });
  }
}
