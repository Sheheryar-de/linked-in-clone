import React from "react";
import BottomNav from "./BottomNav";
import NotificationNavbar from "./NotificationNavBar";
import icon from "../assets/icon.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HouseIcon from "@mui/icons-material/House";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AddBoxIcon from "@mui/icons-material/AddBox";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import camera from "../assets/camera.png";
import { useNavigate } from "react-router-dom";

import { UserAuth } from "../context/AuthContext";

// import { signOut } from "firebase/auth";
// import { auth } from "../firebaseConfig";

function Navbar() {
  const history = useNavigate();
  const { logout } = UserAuth();

  // const handleSignOut = (e) => {
  //   e.preventDefault();
  //   signOut(auth).then(() => {
  //     // Sign-out successful.
  //     alert("You have been Logged Out!")
  //     history('/')
  //   }).catch((error) => {
  //     console.log(error.message);
  //   });
  // }

  const handleSignOut = async () => {
    try {
      await logout();
      history("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <nav className="flex items-center justify-evenly bg-white py-[10px] md:py-0 md:pt-[5px]">
        {/* left side of Navbar */}

        <div className="mobile flex items-center justify-evenly w-[100%] md:justify-start md:w-[40%] lg:w-[40%] xl:w-[50%]">
          <div className="md:ml-[8px]">
            <div className="md:hidden">
              <Avatar src={camera} />
            </div>
            <div className="flex items-center">
              <div className="hidden xl:block">
                <h1 className="text-3xl font-bold text-sky-700">Linked</h1>
              </div>
              <img
                src={icon}
                alt="Linkedin logo"
                className="h-[42px] hidden md:block"
              />
            </div>
          </div>

          <div className="flex bg-slate-200 py-[7px] px-[10px] rounded text-slate-400 sm:ml-[5px]	">
            <div>
              <SearchOutlinedIcon />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="bg-slate-200 outline-0 w-[250px] md:w-[140px]	md:pl-[5px] lg:w-[250px]"
            />
          </div>

          <div className="text-slate-400 md:hidden">
            <ChatRoundedIcon />
          </div>
        </div>

        {/* Right side of Navbar */}
        <div className="Options hidden hover:cursor-pointer md:block md:w-[60%] lg:w-[50%] xl:w-[40%]">
          <div className="flex items-center justify-between ">
            <NotificationNavbar Icon={<HouseIcon />} title="Home" />
            <NotificationNavbar Icon={<PeopleAltIcon />} title="My Network" />
            <NotificationNavbar Icon={<AddBoxIcon />} title="Post" />
            <NotificationNavbar
              Icon={<NotificationsIcon />}
              title="Notifications"
            />

            <div
              onClick={handleSignOut}
              className="flex items-center flex-col text-sm text-slate-500 lg:text-base hover:text-black"
            >
              <div>
                <Avatar src={camera} />
              </div>
              <a href="">
                Me <ArrowDropDownIcon />
              </a>
            </div>

            {/* vertical line */}
            <div className="inline-block h-[50px] min-h-[10px] w-0.5 self-stretch bg-slate-500 opacity-100 "></div>

            <div className="flex items-center flex-col text-slate-500 text-sm lg:text-base hover:text-black">
              <AppsIcon />
              <a href="">
                Work <ArrowDropDownIcon />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* mobile footer navbar */}
      <div className="baseNavbar bg-white sm:hidden fixed bottom-0 left-0 right-0 text-slate-500 pb-[5px]">
        <div className="flex items-center justify-around border-t-2 cursor-pointer z-50">
          <BottomNav Icon={<HouseIcon />} title="Home" />
          <BottomNav Icon={<PeopleAltIcon />} title="My Network" />
          <BottomNav Icon={<AddBoxIcon />} title="Post" />
          <BottomNav Icon={<NotificationsIcon />} title="Notifications" />
          <BottomNav Icon={<BusinessCenterIcon />} title="Jobs" />
        </div>
      </div>
    </>
  );
}
export default Navbar;
