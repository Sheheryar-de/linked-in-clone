import React from "react";

function NotificationNavbar({ Icon, title }) {
  return (
    <>
      <div className="flex items-center flex-col text-slate-500 hover:text-black">
        {Icon}
        <div className="text-sm lg:text-base">{title}</div>
      </div>
    </>
  );
}
export default NotificationNavbar;
