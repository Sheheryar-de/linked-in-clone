import React, { useState } from "react";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

function Widgets() {
const [visible, setVisible] = useState(3);

const showMoreItems = () => {
  setVisible((preValue) => preValue + 3)
}

  const data = [
    {
      id: 1,
      heading: "LinkedIn wins lawsuit",
      Description:
        "Recently, we took another step forward in protecting people who use LinkedIn from fake accounts by winning",
    },
    {
      id: 2,
      heading: "Our 2023 Workforce",
      Description:
        "Our vision is to create economic opportunity for every member of the global workforce",
    },
    {
      id: 3,
      heading: "LinkedIn Business",
      Description:
        "Today, Microsoft announced Q1 FY24 Earnings. Included in the report on the financial performance were the following LinkedIn highlights",
    },
    {
      id: 4,
      heading: "Transparency Report",
      Description:
        "Today our VP - Legal, Digital Safety, Patrick Corrigan shared an update highlighting the takeaways of our biannual Transparency Report",
    },
    {
      id: 5,
      heading: "Welcoming the Digital Services Act",
      Description:
        "Today the European Union’s Digital Services Act, one of the most comprehensive pieces of online safety legislation ever drafted",
    },
    {
      id: 6,
      heading: "Highlights from Microsoft",
      Description:
        "Today, Microsoft announced Q4 FY23 Earnings. Included in the report on the financial performance were the following LinkedIn highlights",
    },
    {
      id: 7,
      heading: "A message from our CEO",
      Description:
        "Today our CEO shared changes to our Global Business Organization (GBO) and our China strategy that will result in a reduction of role",
    },
    {
      id: 8,
      heading: "LinkedIn Business Highlights from Microsoft’s",
      Description:
        "Microsoft announced Q3 FY23 Earnings. Included in the report on the financial performance were the following LinkedIn highlights",
    },
  ];

  return (
    <>
      <div className="p-[10px] bg-white border-[1px] border-slate-200">
        <div className="flex">
          <div>
            <ErrorOutlineOutlinedIcon />
          </div>
          <h2 className="text-base lg:text-lg font-bold">LinkedIn News</h2>
        </div>

        {data.slice(0, visible).map((element) => {
          return (
            <div  key={element.id} className="my-[10px]">
              <div className="font-bold text-xs lg:text-base	">
                <h3 className="leading-[18px]">{element.heading}</h3>
              </div>
              <div className="text-xs leading-[16px] mt-[5px]">
                <p>{element.Description}</p>
              </div>
            </div>
          );
        })}
        <button className="text-sm font-bold text-gray-900" onClick={showMoreItems}>Show More</button>
      </div>
    </>
  );
}
export default Widgets;
