import React from "react";
import MusicBar from "../Components/MusicBar";

function Music() {
  return (
    <>
      <audio src="/youtube-react/assets/music1.mp3" autoPlay loop></audio>
      <div className=" mt-24 ml-16 w-[100vw] h-[100vh] flex flex-col justify-start">
        <MusicBar />
        <MusicBar />
        <MusicBar />
        <MusicBar />
        <MusicBar />
        <MusicBar />
        <MusicBar />
        <MusicBar />
      </div>
    </>
  );
}

export default Music;
