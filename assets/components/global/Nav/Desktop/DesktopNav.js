/**
 *
 *  This is the Desktop Nav
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { Logo } from "../../All/Logo";
import { CartLink } from "../../All/CartLink";
import { SearchToggler } from "../../All/SearchToggler";

import CheckValidPageRoute from "@/assets/functions/dom/checkers/CheckValidPageRoute";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const DesktopNav = () => {
  const router = useRouter();

  const HOME_ROUTE = CheckValidPageRoute(router, "/");
  const INFO_ROUTE = CheckValidPageRoute(router, "/info");
  const STORE_ROUTE = CheckValidPageRoute(router, "/store");
  const CONTACT_ROUTE = CheckValidPageRoute(router, "/contact");

  return (
    <nav id="desktopNav" className={`${styles.desktop_nav}`}>
      <div className={`${styles.desktop_nav_inner}`}>
        <div className={`${styles.desktop_nav_inner_box} container-fluid`}>
          <div className={`${styles.desktop_nav_inner_row} row`}>
            <div
              className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_L} col-lg-4 col-md-4 col-sm-4 col-xs-6`}
            >
              <div className={`${styles.desktop_nav_inner_side_cnt}`}>
                <Logo stylesSrc={styles} />
              </div>
            </div>
            <div
              className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_R} col-lg-8 col-md-8 col-sm-8 col-xs-6`}
            >
              <div className={`${styles.desktop_nav_inner_side_cnt}`}>
                <ul>
                  {HOME_ROUTE ? (
                    <li>
                      <a
                        href="/"
                        className="half-second orientation-change-element"
                        title="Home"
                      >
                        <span className={`${styles.top_line} half-second`} />
                        Home
                        <span className={`${styles.bottom_line} half-second`} />
                      </a>
                    </li>
                  ) : (
                    <li>
                      <span
                        className="half-second orientation-change-element"
                        style={{ opacity: 0.5, pointerEvents: "none" }}
                      >
                        Home
                      </span>
                    </li>
                  )}
                  {STORE_ROUTE ? (
                    <li>
                      <a
                        href="/store"
                        className="half-second orientation-change-element"
                        title="Store"
                      >
                        <span className={`${styles.top_line} half-second`} />
                        Store
                        <span className={`${styles.bottom_line} half-second`} />
                      </a>
                    </li>
                  ) : (
                    <li>
                      <span
                        className="half-second orientation-change-element"
                        style={{ opacity: 0.5, pointerEvents: "none" }}
                      >
                        Store
                      </span>
                    </li>
                  )}
                  {INFO_ROUTE ? (
                    <li>
                      <a
                        href="/info"
                        className="half-second orientation-change-element"
                        title="Info"
                      >
                        <span className={`${styles.top_line} half-second`} />
                        Info
                        <span className={`${styles.bottom_line} half-second`} />
                      </a>
                    </li>
                  ) : (
                    <li>
                      <span
                        className="half-second orientation-change-element"
                        style={{ opacity: 0.5, pointerEvents: "none" }}
                      >
                        Info
                      </span>
                    </li>
                  )}
                  {CONTACT_ROUTE ? (
                    <li>
                      <a
                        href="/contact"
                        className="half-second orientation-change-element"
                        title="Contact"
                      >
                        <span className={`${styles.top_line} half-second`} />
                        Contact
                        <span className={`${styles.bottom_line} half-second`} />
                      </a>
                    </li>
                  ) : (
                    <li>
                      <span
                        className="half-second orientation-change-element"
                        style={{ opacity: 0.5, pointerEvents: "none" }}
                      >
                        Contact
                      </span>
                    </li>
                  )}
                </ul>

                <div className={`${styles.side_links}`}>
                  <CartLink stylesSrc={styles} />
                  <SearchToggler stylesSrc={styles} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
