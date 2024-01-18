/**
 *
 *  This is the Top
 *
 */

import { useRouter } from "next/router";

import { LazyLoadBackgroundImage } from "../../global/All/LazyLoadBackgroundImage";

import CheckValidObjectProperty from "@/assets/functions/dom/checkers/CheckValidObjectProperty";

export const Top = (props) => {
  const router = useRouter();
  const OBJECT = props.obj;
  const TOP_ID = OBJECT.topID;
  const STYLES = OBJECT.stylesSrc;
  const WITH_LINK = OBJECT.withLink;
  const BG = OBJECT.topBG;
  const BG_ALT = OBJECT.topBGAlt;
  const HEADING_A = OBJECT.headingA;
  const HEADING_B = OBJECT.headingB;
  const TEXT = OBJECT.text;
  const LINK_ROUTE = OBJECT.linkRoute;

  let HAS_HEADING_A = CheckValidObjectProperty(HEADING_A);
  let HAS_HEADING_B = CheckValidObjectProperty(HEADING_B);
  let HAS_TEXT = CheckValidObjectProperty(TEXT);
  let HAS_LINK_ROUTE = CheckValidObjectProperty(LINK_ROUTE);

  return TOP_ID !== undefined && TOP_ID !== null && TOP_ID !== "" ? (
    STYLES !== undefined && STYLES !== null && STYLES !== "" ? (
      <section className={`${STYLES.top}`}>
        {BG !== undefined && BG !== null && BG !== "" ? (
          <LazyLoadBackgroundImage
            image_url={BG}
            image_alt={BG_ALT}
            style_className_BG={STYLES.bg}
            style_className_IMG={STYLES.img}
          />
        ) : (
          <span>Not a valid BG</span>
        )}

        <div className={`${STYLES.overlay}`}>
          <div className={`${STYLES.overlay_cnt}`}>
            <h1 className="half-second orientation-change-element">
              {HAS_HEADING_A ? (
                <span className={`${STYLES.heading_a}`}>{HEADING_A}</span>
              ) : (
                <span>Not a valid Heading A</span>
              )}

              {HAS_HEADING_A || HAS_HEADING_B ? <br /> : null}

              {HAS_HEADING_B ? (
                <span className={`${STYLES.heading_b}`}>{HEADING_B}</span>
              ) : (
                <span>Not a valid Heading B</span>
              )}
            </h1>

            {HAS_TEXT ? (
              <p className="half-second orientation-change-element">{TEXT}</p>
            ) : (
              <span>Not a valid Text</span>
            )}

            {WITH_LINK ? (
              HAS_LINK_ROUTE ? (
                <a
                  href={LINK_ROUTE}
                  className="half-second orientation-change-element"
                >
                  <span>Learn More</span>
                </a>
              ) : (
                <span>Not a valid Link Route</span>
              )
            ) : null}
          </div>
        </div>
      </section>
    ) : (
      <span>Not a valid Styles</span>
    )
  ) : (
    <span>Not a valid Object ID</span>
  );
};
