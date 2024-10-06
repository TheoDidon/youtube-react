import React, { useState, useEffect } from "react";

function MusicBar() {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomNumberBars = Math.floor(Math.random() * 8) + 1;
      const newBars = [];

      for (let i = 0; i < randomNumberBars; i++) {
        if (i < 4) {
          newBars.push(
            <div key={i} className="w-4 h-10 bg-green-500 m-1"></div>
          );
        } else if (i === 4 || i === 5) {
          newBars.push(
            <div key={i} className="w-4 h-10 bg-yellow-300 m-1"></div>
          );
        } else {
          newBars.push(<div key={i} className="w-4 h-10 bg-red-600 m-1"></div>);
        }
      }

      setBars(newBars);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return <div className="flex">{bars}</div>;
}

export default MusicBar;
