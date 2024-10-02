import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";
import Explore from "./Pages/Explore";
import Home from "./Pages/Home";
import Subs from "./Pages/Subs";
import Originals from "./Pages/Originals";
import Music from "./Pages/Music";
import Library from "./Pages/Library";

function App() {
  return (
    <Router>
      <Navbar />
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/subs" element={<Subs />} />
        <Route path="/originals" element={<Originals />} />
        <Route path="/music" element={<Music />} />
        <Route path="/Library" element={<Library />} />
      </Routes>
    </Router>
  );
}

export default App;
