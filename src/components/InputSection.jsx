import React from "react";
import InputOptions from "./InputOptions";
import land from '../assets/land.png'

import { Avatar } from "@mui/material";
import PhotoIcon from "@mui/icons-material/Photo";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EventIcon from "@mui/icons-material/Event";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { blue, green, orange, red } from "@mui/material/colors";

export default function InputSection() {
  return (
    <>
      <div className="mb-[15px] bg-white py-[8px] px-[5px] rounded-lg border-[1px] border-slate-200 overflow-hidden">
        <div className="flex items-center ">
          <div className="mr-[10px] flex-none">
            <Avatar src={land} />
          </div>
          <div className="w-[100%]">
            <input
              className="pl-[10px] border-[1px] border-gray-300 w-[100%] py-[8px] rounded-full outline-0"
              type="text"
              placeholder="Start a post"
            />
          </div>
        </div>
        <div className="flex items-center justify-evenly mt-[20px]">
          <InputOptions Icon={<PhotoIcon sx={{ color: blue[400] }}/>} title="Photo" />
          <InputOptions Icon={<YouTubeIcon sx={{ color: green[400] }}/>} title="Video" />
          <InputOptions Icon={<EventIcon sx={{ color: orange[400] }}/>} title="Event" />
          <InputOptions Icon={<NewspaperIcon sx={{ color: red[300] }}/>} title="Write Article" />
        </div>
      </div>
    </>
  );
}
