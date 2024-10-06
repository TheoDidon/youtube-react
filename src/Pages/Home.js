import React, { useEffect, useRef } from "react";
import VideoCard from "../Components/VideoCard";
import { videos } from "../videos";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const videoCardRefs = useRef([]);
  useEffect(() => {
    videoCardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 1 },
        {
          opacity: 0,
          scrollTrigger: {
            trigger: card,
            start: "top 50px",
            end: "top -100px",
            scrub: true,
          },
        }
      );
    });
  }, []);
  return (
    <>
      <div className=" mt-24 ml-16">
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 bg-gray-100 p-4">
          {Object.values(videos).map((video, index) => (
            <div key={index} ref={(el) => (videoCardRefs.current[index] = el)}>
              <VideoCard key={index} video={video} />
            </div>
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
