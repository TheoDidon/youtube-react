import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Icon from "@mdi/react";
import {
  mdiVideoPlusOutline,
  mdiBellOutline,
  mdiMenu,
  mdiMagnify,
} from "@mdi/js";
import { BsGrid3X3Gap } from "react-icons/bs";

function Navbar() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <header className="fixed z-50 top-0 flex items-center justify-between w-full px-4 bg-white">
      <div className=" flex flex-row justify-center items-center ">
        <Icon path={mdiMenu} size={1} />
        <img
          src="/youtube-react/assets/youtube-logo-icon.webp"
          className="max-w-[100px] mx-4"
          alt=""
        />
      </div>
      {!isSmallScreen && <SearchBar />}
      <div className="flex flex-row justify-between items-center space-x-4">
        {isSmallScreen && <Icon path={mdiMagnify} size={1} />}
        <Icon path={mdiVideoPlusOutline} size={1} className="" />
        <BsGrid3X3Gap size={20} className="" />
        <Icon path={mdiBellOutline} size={1} className="" />
        <div className="rounded-full h-10 w-10 bg-red-900"></div>
      </div>
    </header>
  );
}

export default Navbar;
