import React, { useState } from "react";
import InputOptions from "./InputOptions";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import ShortcutRoundedIcon from "@mui/icons-material/ShortcutRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

function Post({
  avatar,
  name,
  skill,
  time,
  status,
  desc,
  image,
  imgDesc,
  link,
}) {
  
  const [count, setCount] = useState(0);
  const handleChange = () => {
    setCount(count + 1);
  };

  return (
    <>
      {/* feed section */}
      <div className="bg-white p-[10px] rounded-lg mb-[10px]  border-[1px] border-slate-200">
        <div className="flex justify-between">
          <div className="flex ">
            <img
              src={avatar}
              className="h-[50px] w-[50px] rounded-full object-cover object-center "
            />
            <div className="ml-[15px] 	">
              <h3 className="font-semibold text-base md:text-lg">{name}</h3>
              <p className="text-xs md:text-sm">{skill}</p>
              <div className="flex">
                <p className="text-xs md:text-sm">
                  {time} , {status}
                </p>
              </div>
            </div>
          </div>
          <div>
            <button className="font-bold text-blue-600 text-sm md:text-base lg:text-lg	">
              + Follow
            </button>
          </div>
        </div>

        {/* image imageDescription and imageURL */}
        <div className="mt-[15px] leading-5 	">
          <p className="font-medium text-sm lg:text-base">{desc}</p>
          <div className="w-[100%] object-cover mt-[15px] bg-slate-100 p-[10px] rounded">
            <img src={image} alt="" />
            <p className="font-bold mt-[10px]">{imgDesc}</p>
            <a href="" className="text-sm text-slate-400 font-medium">
              {link}
            </a>
          </div>
        </div>

        {/* input buttons like comment and  etc */}
        <p className="pl-[10px] text-xs font-bold my-[10px] text-gray-500">{count} Likes</p>
        <div className="flex items-center justify-evenly mt-[3px] py-[10px] bg-slate-50 mb-[5px]">
          <InputOptions
            Icon={<ThumbUpAltIcon />}
            title="Like"
            onClick={handleChange}
          />
          <InputOptions Icon={<CommentRoundedIcon />} title="Comment" />
          <InputOptions Icon={<ShortcutRoundedIcon />} title="Share" />
          <InputOptions Icon={<SendRoundedIcon />} title="Send" />
        </div>
      </div>
    </>
  );
}
export default Post;
