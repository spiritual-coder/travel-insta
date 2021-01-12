import React from "react";

import AppHero from "../Components/Home/hero";
import AppAbout from "../Components/Home/about";
import AppBlogs from "../Components/Home/blogs";
import AppVideo from "../Components/Home/video";

function AppHome() {
  return (
    <div className="main">
      <AppHero />
      <AppAbout />
      <AppBlogs />
      <AppVideo />
    </div>
  );
}

export default AppHome;
