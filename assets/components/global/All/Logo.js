/**
 *
 *  This is the Logo
 *
 */

import { useRouter } from "next/router";

import { LazyLoadImage } from "react-lazy-load-image-component";

import { LOGO } from "@/assets/cdns/CDNImgs";

export const Logo = (props) => {
  const router = useRouter();
  const STYLES = props.stylesSrc;

  return router.pathname !== "/" ? (
    <a href="/" className={`${STYLES.logo}`} title={"Go Home"}>
      <div className={`${STYLES.logo_inner}`}>
        <LazyLoadImage
          src={LOGO}
          alt={"Cowboyfrontier Logo."}
          // title={"Cowboyfrontier Logo."}
        />

        <div>
          <span
            className={`${STYLES.top_text} half-second orientation-change-element`}
          >
            <span>COWBOY</span>FRONTIER
          </span>
          <span
            className={`${STYLES.bottom_text} half-second orientation-change-element`}
          >
            WESTERN ECOMMERCE
          </span>
        </div>
      </div>
    </a>
  ) : (
    <div className={`${STYLES.logo}`}>
      <div className={`${STYLES.logo_inner}`}>
        <LazyLoadImage
          src={LOGO}
          alt={"Cowboyfrontier Logo."}
          // title={"Cowboyfrontier Logo."}
        />

        <div>
          <span
            className={`${STYLES.top_text} half-second orientation-change-element`}
          >
            <span>COWBOY</span>FRONTIER
          </span>
          <span
            className={`${STYLES.bottom_text} half-second orientation-change-element`}
          >
            WESTERN ECOMMERCE
          </span>
        </div>
      </div>
    </div>
  );
};
