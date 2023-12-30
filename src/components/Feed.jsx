import React from "react";
import Post from "./Post";
import Card from "./card";
import Widgets from "./Widgets";
import InputSection from "./InputSection";

import camera from "../assets/camera.png";
import image from "../assets/image.png";
import land from "../assets/land.png";

function Feed() {
  return (
    <>
      <div className="flex gap-[10px]">
        <div className="flex-none">
          <Card
            className="sticky"
            bg_image={land}
            profile={camera}
            name="Sheheryar Ahmed"
            title="Full Stack Developer"
          />
        </div>

        <div className="flex-1">
          <InputSection />
          
          <Post
            avatar={camera}
            name="Sheheryar Ahmed"
            skill="Web Developer,  React Developer"
            time="3 h"
            status="Anyone"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s."
            image={image}
            imgDesc="Linked-In: Image of linked-in main page of feed section that shows the total layout of linked-in"
            link="www.google.com"
          />
        </div>
        <div className="flex-none sticky top-0 h-max hidden border-[1px] border-gray md:block md:w-[160px] lg:w-[250px] rounded-md overflow-hidden ">
          <Widgets />
        </div>
      </div>
    </>
  );
}
export default Feed;
