import React from "react";
import LocalAtmRoundedIcon from "@mui/icons-material/LocalAtmRounded";
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';

function Card({ bg_image, profile, name, title, short_desc }){
    return(
        <>
       
        <div className="hidden sticky top-0  border-[1px] border-slate-200 rounded-lg overflow-hidden md:block md:w-[150px] h-[max-content] lg:w-[220px] bg-white">
          <div className=" md:flex md:flex-col md:items-center ">
            <div className=" h-[65px] overflow-hidden">
              <img className=" object-fill object-top" src={bg_image} alt="" />
            </div>
            <div className=" overflow-hidden mt-[-25px] lg:mt-[-34px]">
              <img
                className="h-[50px] w-[50px] border-[2px] border-white rounded-full object-cover object-center lg:h-[70px] lg:w-[70px]"
                src={profile}
                alt=""
              />
            </div>
            <h3 className="font-bold text-base lg:text-xl font-sans">{name}</h3>
            <p className="text-xs text-gray-500 lg:text-sm font-sans mt-[7px]">{title}</p>
            <p className="text-xs text-gray-400">{short_desc}</p>

            <hr className="w-[100%] h-[2px] border-gray-200 my-[15px]" />
          </div>
          <div className=" w-[90%] mx-auto">
            <p className="text-[10px] text-gray-500 flex justify-between lg:text-[14px]">
              Who viewed your profile <span className="text-blue-500">180</span>
            </p>
            <p className="mt-[10px] text-[10px] text-gray-500 flex justify-between lg:text-[14px]">
              Views of your post <span className="text-blue-500">1,580</span>
            </p>
          </div>
          <div className="mt-[20px] w-[90%] mx-auto">
            <p className="text-[10px] text-gray-500 lg:text-[14px] mb-[5px]">
              Unlock ex1clusive features
            </p>
            <p>
              <span className=" text-[#f59e0b]">
                <LocalAtmRoundedIcon fontSize="small"/>
              </span>
              <span className="text-[11px] font-bold lg:text-[15px] ml-[5px]">
                Try Premium Free for 1 Month
              </span>
            </p>
          </div>

          <hr className="w-[100%] h-[2px] border-gray-200 mt-[15px]" />
          <p className="text-[12px] font-bold flex items-center py-[10px] lg:text-[15px] w-[93%] mx-[auto]"><TurnedInNotOutlinedIcon fontSize="small"/> Saved Items</p>
        </div>
        </>
    );
}
export default Card;