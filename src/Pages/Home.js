import React from "react";
import VideoCard from "../Components/VideoCard";
import { videos } from "../videos";

function Home() {
  return (
    <>
      <div className=" mt-24 ml-16">
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 bg-gray-100 p-4">
          {Object.values(videos).map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}
        </div>
      </div>
      <p className="text-center">
        Inspiration from{" "}
        <a href="https://supersimple.dev/exercises/youtube">
          https://supersimple.dev/exercises/youtube
        </a>
      </p>
    </>
  );
}

export default Home;
