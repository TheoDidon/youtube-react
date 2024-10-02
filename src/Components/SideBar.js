import React from "react";

import Icon from "@mdi/react";
import {
  mdiHome,
  mdiCompassOutline,
  mdiPlayBoxMultipleOutline,
  mdiYoutubeSubscription,
  mdiYoutube,
} from "@mdi/js";

function SideBar() {
  return (
    <div className="fixed flex flex-col justify-around items-center h-[80vh] top-24 w-16 bg-white">
      <div className="flex flex-col items-center justify-center w-[100%] h-[100%] hover:bg-gray-200">
        <Icon path={mdiHome} size={0.9} />
        <p className="text-center text-[0.6rem]">Home</p>
      </div>
      <div className="flex flex-col items-center justify-center w-[100%] h-[100%] hover:bg-gray-200">
        <Icon path={mdiCompassOutline} size={0.9} />
        <p className="text-center text-[0.6rem]">Explore</p>
      </div>
      <div className="flex flex-col items-center justify-center w-[100%] h-[100%] hover:bg-gray-200">
        <Icon path={mdiYoutubeSubscription} size={0.9} />
        <p className="text-center text-[0.6rem]">Subscribtions</p>
      </div>
      <div className="flex flex-col items-center justify-center w-[100%] h-[100%] hover:bg-gray-200">
        <Icon path={mdiYoutube} size={0.9} />
        <p className="text-center text-[0.6rem]">Originals</p>
      </div>
      <div className="flex flex-col items-center justify-center w-[100%] h-[100%] hover:bg-gray-200">
        <img
          src="/youtube-react/assets/youtube-music.svg"
          className="w-7"
          alt="ytb-music"
        ></img>
        <p className="text-center text-[0.6rem]">YouTube Music</p>
      </div>
      <div className="flex flex-col items-center justify-center w-[100%] h-[100%] hover:bg-gray-200">
        <Icon path={mdiPlayBoxMultipleOutline} size={0.9} />
        <p className="text-center text-[0.6rem]">Library</p>
      </div>
    </div>
  );
}

export default SideBar;
