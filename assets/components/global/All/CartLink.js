/**
 *
 *  This is the Cart Link
 *
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { FaShoppingCart } from "react-icons/fa";

export const CartLink = (props) => {
  const router = useRouter();
  const STYLES = props.stylesSrc;

  const [cartTitle, setCartTitle] = useState(0);

  let CART_TITLE = undefined;

  useEffect(() => {
    setTimeout(() => {
      CART_TITLE =
        "My Cart - (" +
        document.querySelector(".cart-counter").innerHTML.toString() +
        ")";
      setCartTitle(CART_TITLE);
    }, 700);
  }, []);

  return router.pathname !== "/cart" ? (
    <a
      href="/cart"
      className={`${STYLES.cart_link}`}
      style={{ opacity: 1, pointerEvents: "auto" }}
      title={cartTitle}
    >
      <FaShoppingCart
        className={`${STYLES.icon} half-second orientation-change-element`}
      />

      <div className="half-second orientation-change-element">
        <span className="cart-counter half-second orientation-change-element">
          ...
        </span>
      </div>
    </a>
  ) : (
    <div
      className={`${STYLES.cart_link}`}
      style={{ opacity: 0.5, pointerEvents: "none" }}
    >
      <FaShoppingCart
        className={`${STYLES.icon} half-second orientation-change-element`}
      />

      <div className="half-second orientation-change-element">
        <span className="cart-counter half-second orientation-change-element">
          ...
        </span>
      </div>
    </div>
  );
};
