import React, { useState } from "react";
import { aruna2 } from "../assets/img/galery/index";
import { image1 } from "../assets/img/galery/index";
import { image2 } from "../assets/img/galery/index";
import { image3 } from "../assets/img/galery/index";
import { image4 } from "../assets/img/galery/index";
import { image5 } from "../assets/img/galery/index";

import { Link } from "react-router-dom";

const Arunasdc = () => {
  let [open, setOpen] = useState(false);
  return (
    <div
      className="w-full  
    bg-white  py-32 lg:py-50   "
    >
      <div onClick={() => setOpen(!open)}></div>
      <div className="bg-[#EF841A] w-full p-3  mt-[-24px] ">
        <p className="text-md">Beranda &gt; Aruna SDC &gt; Workshop </p>
      </div>
      <div className="p-10  ">
        <h3 className="text-xl text-[#EF841A] font-bold mb-2">Profil Aruna SDC</h3>
        <div className="flex flex-col-reverse sm:flex-row sm:mb-20 sm:mx-6 ">
          <p className="sm:text-lg sm:mt-20 sm:p-10 p-2 w-200 sm:justify-text-center">
            Aruna School Development Consultant (Aruna SDC) didirikan pada tahun 2015 oleh Ms Eva Sidabutar bersama rekannya Ms Indri. Aruna SDC adalah perusahaan konsultan yang menyediakan layanan konsultasi dan pelatihan dalam
            mengimplementasikan rencana pengembangan sekolah atau inisiatif-inisiatif peningkatan profesionalitas bagi segenap komunitas sekolah.
          </p>
          <img className="mt-2" src={aruna2} alt="aruna2" />
        </div>
      </div>
      <div className="sm:pl-20 pl-10 mx-10">
        <div className="flex ">
          <i className="fa fa-paper-plane w-[40.03px] h-[40.03px]"></i>
          <p className="font-bold">VISI</p>
        </div>
        <p>Menjadi mitra sekolah untuk mengembangkan budaya belajar dalam komunitas sekolah.</p>
      </div>
      <div className="mt-10 sm:pl-20 pl-10 mx-10">
        <div className="flex ">
          <i className="fa fa-paper-plane w-[40.03px] h-[40.03px]"></i>
          <p className="font-bold">MISI</p>
        </div>
      </div>
      <ul className="pl-10 sm:pl-20 list-disc mx-10 sm:w-100">
        <li>Mendukung target-target pengembangan sekolah melalui berbagai program dan layanan pendampingan.</li>
        <li>Merencanakan, mengimplementasi dan mengevaluasi program peningkatan profesionalitas tim kepemimpinan/manajemen sekolah atau guru.</li>
        <li>Memberikan pendampingan dalam mengembangkan komunitas sekolah khususnya orangtua dan masyarakat untuk mendukung pembelajaran siswa.</li>
        <li>Memberikan pendampingan dalam tahap awal pendirian sekolah. </li>
      </ul>
      <div className="mt-20">
        <p className="text-2xl font-bold text-center">Layanan Kami</p>
        <div className="max-w-7xl  sm:mx-auto p-5 justify-center items-center sm:m-8 grid grid-cols-2 sm:grid-cols-4 gap-2">
          <div className=" bg-white rounded-md p-6 shadow-lg flex flex-col items-center mb-5 mx-5">
            <div>
              <img src={aruna2} alt="aruna2" className="h-20" />
            </div>
            <div className="text-center">
              <h3 className="text-xl mt-2">Sahabat Aruna</h3>
              <div className="mt-5 text-white">
                <i className="fa-solid fa-chevron-up fa-rotate-90 p-2 bg-gray-500 hover:bg-gray-800 rounded-full" />
              </div>
            </div>
          </div>
          <div className=" bg-white rounded-md p-6 shadow-lg flex flex-col items-center mb-5 mx-5">
            <div>
              <img src={aruna2} alt="aruna2" className="h-20" />
            </div>
            <div className="text-center">
              <h3 className="text-xl mt-2">Workshop</h3>

              <div className="mt-5 text-white ">
                <Link to={"workshop"}>
                  <i className="fa-solid fa-chevron-up fa-rotate-90 p-2 bg-gray-500 hover:bg-gray-800 rounded-full" />
                </Link>
              </div>
            </div>
          </div>
          <div className=" bg-white rounded-md p-6 shadow-lg flex flex-col items-center mb-5 mx-5">
            <div>
              <img src={aruna2} alt="aruna2" className="h-20" />
            </div>
            <div className="text-center">
              <h3 className="text-xl mt-2">Sahabat Aruna</h3>
              <div className="mt-5 text-white">
                <i className="fa-solid fa-chevron-up fa-rotate-90 p-2 bg-gray-500 hover:bg-gray-800 rounded-full" />
              </div>
            </div>
          </div>
          <div className=" bg-white rounded-md p-6 shadow-lg flex flex-col items-center mb-5 mx-5">
            <div>
              <img src={aruna2} alt="aruna2" className="h-20" />
            </div>
            <div className="text-center">
              <h3 className="text-xl mt-2">Sahabat Aruna</h3>
              <div className="mt-5 text-white ">
                <i className="fa-solid fa-chevron-up fa-rotate-90 p-2 bg-gray-500 hover:bg-gray-800 rounded-full" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-2xl text-center font-bold">Kegiatan</p>
          <div className="mt-3 p-5 sm:p-10 grid grid-cols-3 sm:grid-cols-3 gap-2">
            <div className="h-15 rounded-lg">
              <img src={image1} alt="image1" />
            </div>
            <div className="h-15 rounded-lg">
              <img src={image2} alt="image2" />
            </div>
            <div className="h-15 rounded-lg">
              <img src={image3} alt="image3" />
            </div>
            <div className="h-15 rounded-lg">
              <img src={image4} alt="image4" />
            </div>
            <div className="h-15 rounded-lg">
              <img src={image5} alt="image5" />
            </div>
            <div className="h-15 rounded-lg">
              <img src={image2} alt="image2" />
            </div>
            <div className="h-15 rounded-lg">
              <img src={image3} alt="image3" />
            </div>
            <div className="h-15 rounded-lg">
              <img src={image4} alt="image4" />
            </div>
            <div className="h-15 rounded-lg">
              <img src={image5} alt="image5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arunasdc;
