// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";

// Library Imports

// Data/Functions/Images Imports

// Component Imports

// Style Imports
import "../assets/styles/modules/Info/Info.module.css";

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

export default function Info({
  PH_ICONS_DATA,
  HAT_ITEMS_DATA,
  BOOT_ITEMS_DATA,
  SADDLE_ITEMS_DATA,
  GUN_ITEMS_DATA,
}) {
  const router = useRouter();

  // Saving Cart Data
  useEffect(() => {
    // DeclareStorageVariable("local", "Item Name: Boot 1", "Boot 1");
    // DeclareStorageVariable("local", "Boot 1 Quantity", 2);
    // DeclareStorageVariable("local", "Item Name: Saddle 1", "Saddle 1");
    // DeclareStorageVariable("local", "Saddle 1 Quantity", 1);

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

  return "";
}
