import InputOptions from "./InputOptions";
import land from "../assets/land.png";
import { useState } from "react";
import { Avatar } from "@mui/material";
import PhotoIcon from "@mui/icons-material/Photo";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EventIcon from "@mui/icons-material/Event";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { blue, green, orange, red } from "@mui/material/colors";
import { UserAuth } from "../context/AuthContext";

export default function InputSection() {
  const { addUser } = UserAuth();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addUser(inputValue);
      setInputValue("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      <div className="mb-[15px] bg-white py-[8px] px-[5px] rounded-lg border-[1px] border-slate-200 overflow-hidden">
        <form className="flex items-center" onSubmit={handleSubmit}>
          <div className="mr-[10px] flex-none">
            <Avatar src={land} />
          </div>
          <div className="w-[100%]">
            <input
              className="pl-[10px] border-[1px] border-gray-300 w-[100%] py-[8px] rounded-full outline-0"
              type="text"
              placeholder="Start a post"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <input
            className="w-[max-content] ml-[10px] px-2 py-1 rounded bg-blue-400 text-white"
            type="submit"
            value="Send"
          />
        </form>
        <div className="flex items-center justify-evenly mt-[20px]">
          <InputOptions
            Icon={<PhotoIcon sx={{ color: blue[400] }} />}
            title="Photo"
          />
          <InputOptions
            Icon={<YouTubeIcon sx={{ color: green[400] }} />}
            title="Video"
          />
          <InputOptions
            Icon={<EventIcon sx={{ color: orange[400] }} />}
            title="Event"
          />
          <InputOptions
            Icon={<NewspaperIcon sx={{ color: red[300] }} />}
            title="Write Article"
          />
        </div>
      </div>
    </>
  );
}
