import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/" className="flex flex-col justify-center items-center">
          <Icon path={mdiHome} size={0.9} />
          <p className="text-center text-[0.6rem]">Home</p>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center w-[100%] h-[100%] hover:bg-gray-200">
        <Link
          to="/explore"
          className="flex flex-col justify-center items-center"
        >
          <Icon path={mdiCompassOutline} size={0.9} />
          <p className="text-center text-[0.6rem]">Explore</p>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center w-[100%] h-[100%] hover:bg-gray-200">
        <Link to="/subs" className="flex flex-col justify-center items-center">
          <Icon path={mdiYoutubeSubscription} size={0.9} />
          <p className="text-center text-[0.6rem]">Subscribtions</p>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center w-[100%] h-[100%] hover:bg-gray-200">
        <Link
          to="/originals"
          className="flex flex-col justify-center items-center"
        >
          <Icon path={mdiYoutube} size={0.9} />
          <p className="text-center text-[0.6rem]">Originals</p>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center w-[100%] h-[100%] hover:bg-gray-200">
        <Link to="/music" className="flex flex-col justify-center items-center">
          <img
            src="/youtube-react/assets/youtube-music.svg"
            className="w-7"
            alt="ytb-music"
          ></img>
          <p className="text-center text-[0.6rem]">YouTube Music</p>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center w-[100%] h-[100%] hover:bg-gray-200">
        <Link
          to="/library"
          className="flex flex-col justify-center items-center"
        >
          <Icon path={mdiPlayBoxMultipleOutline} size={0.9} />
          <p className="text-center text-[0.6rem]">Library</p>
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
