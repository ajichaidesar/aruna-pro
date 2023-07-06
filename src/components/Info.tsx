import React from "react";
import { icon1 } from "../assets/img/icon/index";
// import { Vector } from "../assets/img/icon/index";
// import {icon2} from '../assets/img/icon/index'
// import {icon3} from '../assets/img/icon/index'

const info = () => {
  return (
    <div className="max-w-7xl  mx-auto flex justify-center items-center m-8">
      <div className=" bg-white w-[200px] h-[180px] sm:h-[250px] rounded-md p-2 sm:p-4 shadow-lg flex flex-col items-center mr-1 ml-8">
        <img src={icon1} alt="icon1" className="h-[60px] sm:h-[100px]" />

        <div className="text-center">
          <h3 className="text-[15px] sm:text-xl  mt-2">Lorem Ipsum</h3>
          <p className="text-xs sm:text-sm mt-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

      <div className=" bg-white w-[200px] h-[180px] sm:h-[250px] rounded-md p-2 sm:p-4 shadow-lg flex flex-col items-center mr-1 ml-8">
        <img src={icon1} alt="icon1" className="h-[60px] sm:h-[100px]" />

        <div className="text-center">
          <h3 className="text-[15px] sm:text-xl  mt-2">Lorem Ipsum</h3>
          <p className="text-xs sm:text-sm mt-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

      <div className=" bg-white w-[200px] h-[180px] sm:h-[250px] rounded-md p-2 sm:p-4 shadow-lg flex flex-col items-center mr-1 ml-8">
        <img src={icon1} alt="icon1" className="h-[60px] sm:h-[100px]" />

        <div className="text-center">
          <h3 className="text-[15px] sm:text-xl  mt-2">Lorem Ipsum</h3>
          <p className="text-xs sm:text-sm mt-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default info;
