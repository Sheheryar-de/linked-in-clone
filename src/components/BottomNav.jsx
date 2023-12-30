import React from "react";

function BottomNav({ Icon, title }) {
  return (
    <>
      <li className="flex items-center flex-col pt-[5px] border-t-2 border-transparent  active:border-t-2 active:border-t-2 active:border-black active:text-black">
        {Icon}
        {title}
      </li>
    </>
  );
}
export default BottomNav;
