/**
 *
 *  This is the Search Popup
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { FaTimes } from "react-icons/fa";

import { Logo } from "../../All/Logo";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

const PopupCloser = () => {
  return (
    <button
      className="half-second orientation-change-element"
      onClick={(e) => {
        const POPUP = document.getElementById("searchPopup");
        const TOGGLER = document.getElementById("searchToggler");

        if (POPUP) {
          POPUP.style.pointerEvents = "none";
          POPUP.style.opacity = 0;
          POPUP.style.visibility = "hidden";
        }

        if (TOGGLER) {
          TOGGLER.style.backgroundColor = "transparent";
          TOGGLER.style.color = "#8d1a21";
          TOGGLER.style.opacity = 1;
          TOGGLER.style.pointerEvents = "auto";
        }
      }}
    >
      <FaTimes className={`${styles.icon}`} />
    </button>
  );
};

export const SearchPopup = () => {
  return (
    <div
      id="searchPopup"
      className={`${styles.search_popup} full-second`}
    ></div>
  );
};
