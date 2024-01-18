/**
 *
 *  This is the Search Toggler
 *
 */

import { useRouter } from "next/router";

import { FaSearch } from "react-icons/fa";

export const SearchToggler = (props) => {
  const router = useRouter();
  const STYLES = props.stylesSrc;

  return (
    <button
      id="searchToggler"
      className={`${STYLES.search_toggler} half-second orientation-change-element`}
      title="Search"
      onClick={(e) => {
        e.currentTarget.style.pointerEvents = "none";
        e.currentTarget.style.opacity = 0.5;
        e.currentTarget.style.backgroundColor = "#8d1a21";
        e.currentTarget.style.color = "white";
      }}
    >
      <FaSearch className={`${STYLES.icon}`} />
    </button>
  );
};
