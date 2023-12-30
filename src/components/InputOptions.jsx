import React, { useState } from "react";

function InputOptions({ title, Icon, onClick }){
    
    return(
        <>
        <div onClick={onClick} className="text-slate-600 flex items-center gap-[5px] rounded overflow-hidden cursor-pointer hover:text-black">
            <div>{Icon}</div>
            <div className="text-xs md:text-sm lg:text-base">{title}</div>
        </div>
        </>
    );
}
export default InputOptions