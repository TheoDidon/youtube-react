import React from "react";

function VideoCard({ video }) {
  return (
    <div className="flex flex-col max-w-[300px] fr-1">
      <div className="relative w-[100%]">
        <img src={video.thumbnail} className=" cover-full" alt="thumbnail" />
        <p className="absolute bottom-4 right-4 bg-black text-white p-1 rounded text-xs">
          {video.duration}
        </p>
      </div>
      <div className="flex">
        <div className="p-1">
          <img
            src={video.channelProfile}
            className="rounded-full my-1"
            alt="channel-picture"
          />
        </div>
        <div className="flex flex-col mx-1">
          <p className="font-bold text-md my-1">{video.title}</p>
          <p className="text-xs">{video.channelName}</p>
          <p className="text-xs">
            {video.views} views &#8226; {video.time} ago
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
