import React from "react";

import Icon from "@mdi/react";
import {
  mdiMicrophone,
  mdiVideoPlusOutline,
  mdiBellOutline,
  mdiMenu,
  mdiMagnify,
} from "@mdi/js";
import { BsGrid3X3Gap } from "react-icons/bs";

function Navbar() {
  return (
    <header className="fixed z-50 top-0 flex items-center justify-between w-full px-4 bg-white">
      <div className=" flex flex-row justify-center items-center ">
        <Icon path={mdiMenu} size={1} />
        <img
          src="/assets/youtube-logo-icon.webp"
          className="max-w-[100px] mx-4"
          alt=""
        />
      </div>
      <div className="flex justify-center items-center flex-grow max-w-lg">
        <input
          className=" border-gray-300 border-2 p-2 "
          placeholder="Search"
        ></input>
        <div className="flex justify-center items-center bg-gray-100 border-gray-300 border-2 p-2">
          <Icon path={mdiMagnify} size={1} />
        </div>
        <Icon
          path={mdiMicrophone}
          size={1}
          className="bg-gray-100 rounded-full m-4 min-w-11 min-h-11 p-2"
        />
      </div>
      <div className="flex flex-row justify-between items-center space-x-4">
        <Icon path={mdiVideoPlusOutline} size={1} className="" />
        <BsGrid3X3Gap size={20} className="" />
        <Icon path={mdiBellOutline} size={1} className="" />
        <div className="rounded-full h-10 w-10 bg-red-900"></div>
      </div>
    </header>
  );
}

export default Navbar;
