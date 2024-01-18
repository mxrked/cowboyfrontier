// React/Next Imports
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";

// Library Imports

// Data/Functions/Images Imports
import SaveCartItems from "@/assets/functions/data/cart/SaveCartItems";
import DeclareStorageVariable from "@/assets/functions/data/storage/DeclareStorageVariable";

import { INDEX_TOP_BG } from "@/assets/cdns/CDNBgs";

// Component Imports
import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";
import { Top } from "@/assets/components/pages/All/Top";

// Style Imports
import "../assets/styles/modules/Index/Index.module.css";
import index_styles from "../assets/styles/modules/Index/Index.module.css";

export async function getServerSideProps() {
  const PAGE_HEAD_DATA_DIRECTORY = "public/data/Page_Head_Data/";
  const STORE_DATA_DIRECTORY = "public/data/Store_Data/";

  const UTF8 = "utf-8";

  const PH_ICONS_DATA_FP = path.join(
    process.cwd(),
    PAGE_HEAD_DATA_DIRECTORY,
    "PH_Icons.json"
  );
  const HAT_ITEMS_DATA_FP = path.join(
    process.cwd(),
    STORE_DATA_DIRECTORY,
    "Hats.json"
  );
  const BOOT_ITEMS_DATA_FP = path.join(
    process.cwd(),
    STORE_DATA_DIRECTORY,
    "Boots.json"
  );
  const SADDLE_ITEMS_DATA_FP = path.join(
    process.cwd(),
    STORE_DATA_DIRECTORY,
    "Saddles.json"
  );
  const GUN_ITEMS_DATA_FP = path.join(
    process.cwd(),
    STORE_DATA_DIRECTORY,
    "Guns.json"
  );

  const PH_ICONS_DATA_FC = fs.readFileSync(PH_ICONS_DATA_FP, UTF8);
  const HAT_ITEMS_DATA_FC = fs.readFileSync(HAT_ITEMS_DATA_FP, UTF8);
  const BOOT_ITEMS_DATA_FC = fs.readFileSync(BOOT_ITEMS_DATA_FP, UTF8);
  const SADDLE_ITEMS_DATA_FC = fs.readFileSync(SADDLE_ITEMS_DATA_FP, UTF8);
  const GUN_ITEMS_DATA_FC = fs.readFileSync(GUN_ITEMS_DATA_FP, UTF8);

  let PH_ICONS_DATA = undefined;
  let HAT_ITEMS_DATA = undefined;
  let BOOT_ITEMS_DATA = undefined;
  let SADDLE_ITEMS_DATA = undefined;
  let GUN_ITEMS_DATA = undefined;

  try {
    PH_ICONS_DATA = JSON.parse(PH_ICONS_DATA_FC);
    HAT_ITEMS_DATA = JSON.parse(HAT_ITEMS_DATA_FC);
    BOOT_ITEMS_DATA = JSON.parse(BOOT_ITEMS_DATA_FC);
    SADDLE_ITEMS_DATA = JSON.parse(SADDLE_ITEMS_DATA_FC);
    GUN_ITEMS_DATA = JSON.parse(GUN_ITEMS_DATA_FC);

    return {
      props: {
        PH_ICONS_DATA,
        HAT_ITEMS_DATA,
        BOOT_ITEMS_DATA,
        SADDLE_ITEMS_DATA,
        GUN_ITEMS_DATA,
      },
    };
  } catch (error) {
    console.error("Error while fetching data: " + error);

    return {
      props: {
        PH_ICONS_DATA: null,
        HAT_ITEMS_DATA: null,
        BOOT_ITEMS_DATA: null,
        SADDLE_ITEMS_DATA: null,
        GUN_ITEMS_DATA: null,
      },
    };
  }
}

export default function Home({
  PH_ICONS_DATA,
  HAT_ITEMS_DATA,
  BOOT_ITEMS_DATA,
  SADDLE_ITEMS_DATA,
  GUN_ITEMS_DATA,
}) {
  const router = useRouter();

  // Saving Cart Data
  useEffect(() => {
    // DeclareStorageVariable("local", "Item Name: Test Product", "Test Product");
    // DeclareStorageVariable("local", "Test Product Quantity", 2);

    setTimeout(() => {
      // Getting the cart items
      SaveCartItems(
        HAT_ITEMS_DATA,
        BOOT_ITEMS_DATA,
        SADDLE_ITEMS_DATA,
        GUN_ITEMS_DATA
      );
    }, 500);
  }, []);

  const TOP_OBJECT = {
    topID: "TOP_INDEX",
    stylesSrc: { index_styles },
    withLink: true,
    topBG: INDEX_TOP_BG,
    topBGAlt: "Cowboyfrontier: Man riding horse with equipment.",
    headingA: "boots, hats, ",
    headingB: "saddles & guns.",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    linkRoute: "/store",
  };

  return (
    <div id="PAGE" className="page">
      <DesktopNav />

      <div id="PAGE_CNT"></div>
    </div>
  );
}
