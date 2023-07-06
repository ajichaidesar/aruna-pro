import React from "react";
import { aruna1 } from "../assets/img/galery/index";
import Map from "../components/Map";
import Register2 from "../components/Register2";

const kontak = () => {
  return (
    <div
      className="w-full  
    bg-white  py-32 lg:py-50 flex flex-col "
    >
      <div className="bg-[#EF841A] w-full p-3  mt-[-24px] ">
        <p className="text-lg">Beranda &gt; Kontak </p>
      </div>
      <div>
        <p className="pt-8 pl-5 sm:pl-10 text-xl sm:text-3xl  text-[#EF841A]">Hubungi Kami</p>
      </div>
      <div className="sm:flex ">
        <img src={aruna1} alt="aruna1" className="p-10  w-100" />
        <div className="px-10 mt-5 sm:mt-40">
          <p>Alamat :</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row p-10  my-5 sm:my-10 ">
        <div className=" sm:w-[718px] h-[500px] sm:h-[500px]  rounded-xl">
          <Map />
        </div>
        <div className="flex flex-col   mb-3">
          <div className="w-170 sm:w-[317px] h-70px sm:h-[80px]   gap-8 px-5 mt-2 my-1 mx-1">
            <div className="mb-3">
              <h3 className="text-2xl sm:text-3xl ">Kontak Kami</h3>
              <ul>
                <li className="pb-2">
                  <i className="fa-solid fa-phone text-md sm:text-2xl mb-3"></i>
                  <a href="#" className="hover:text-blue-500 pl-2 text-md sm:text-xl">
                    082211223399{" "}
                  </a>
                </li>
                <li className="pb-2">
                  <i className="fa-solid fa-envelope text-2xl mb-3"></i>
                  <a href="#" className="hover:text-blue-500 pl-2 text-md sm:text-xl">
                    rumaharuna@gmail.com{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-3">
              <h3 className="text-2xl sm:text-3xl text-black">SOSIAL MEDIA</h3>
              <ul>
                <li className="pb-2 ">
                  <i className="fa-brands fa-square-instagram"></i>
                  <a href="#" className="hover:text-blue-500 pl-2 text-md sm:text-xl">
                    {" "}
                    Instagram
                  </a>
                </li>
                <li className="pb-2">
                  <i className="fa-brands fa-facebook"></i>
                  <a href="#" className="hover:text-blue-500 pl-2 text-md sm:text-xl">
                    {" "}
                    Facebook
                  </a>
                </li>
                <li className="pb-2">
                  <i className="fa-brands fa-twitter"></i>
                  <a href="#" className="hover:text-blue-500 pl-2 text-md sm:text-xl">
                    {" "}
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row  ">
        <div className="mt-500 pl-10">
          <p className="sm:text-xl text-lg font-bold ">Anda memiliki pertanyaan ?</p>
          <p>kirim pesan, dan kami akan menjawab pertanyaan anda</p>
        </div>
        <div className=" mr-[-20px] ">
          <Register2 />
        </div>
      </div>
    </div>
  );
};

export default kontak;
