import React from "react";
import { icon1, icon2, icon3 } from "../../assets/img/icon/index";

const data = [
  {
    icon: icon1,
    title: "Lorem Ipsum 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: icon2,
    title: "Lorem Ipsum 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: icon3,
    title: "Lorem Ipsum 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  
];

const Info = () => {
  return (
    <div className="max-w-7xl font-andika mx-auto flex justify-center items-center m-8">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-white w-[200px] h-[180px] sm:h-[250px] rounded-md p-2 sm:p-4 shadow-lg flex flex-col items-center mr-1 ml-8"
        >
          <img
            src={item.icon}
            alt={`icon${index + 1}`}
            className="h-[60px] sm:h-[100px]"
          />

          <div className="text-center">
            <h3 className="text-[15px] sm:text-xl mt-2">{item.title}</h3>
            <p className="text-xs sm:text-sm mt-2 ">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Info;
