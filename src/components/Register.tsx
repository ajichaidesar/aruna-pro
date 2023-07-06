import React, { useState } from "react";
import { Service } from "../assets/img/galery/index";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Number:", number);
  };

  return (
    <div className="w-full bg-white py-32 lg:py-50">
      <div className="bg-[#EF841A] w-full p-3 mt-[-24px]">
        <p className="text-md sm:text-xl">Beranda &gt; Aruna SDC &gt; Workshop </p>
      </div>
      <hr className="my-6 border-none" />
      <div>
        <div className="flex sm:flex-row flex-col items-start mb-6 p-10">
          <img src={Service} alt="service" className="pl-200 sm:pl-20" />
          <div className="sm:pl-10">
            <h2 className="text-2xl text-left font-bold mb-2">Judul Workshop</h2>
            <p className="text-gray-400 xl:text-lg text-xs">20 Maret 2023 09:00 AM</p>
            <div className="text-gray-600 text-left">
              <h3>Deskripsi: </h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
              Maecenas eget condimentum velit, sit amet feugiat lectus
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 sm:pl-20 pl-0 mx-10">
          <div className="flex ">
            <i className="fa fa-paper-plane w-[40.03px] h-[40.03px]"></i>
            <p className="font-bold pl-3">PERSYARATAN PENDAFTARAN</p>
          </div>
          <ul className=" list-disc mx-10 sm:w-100">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>
        <div className="w-full mt-10 bg-[#EF841A] p-20 flex justify-center items-center h-7xl">
          <div className="bg-white rounded-xl p-5 px-10 shadow-md w-[400px]">
            <h2 className="text-lg sm:text-lg text-center font-bold mb-6">Daftarkan Dirimu Sekarang</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Nama Lengkap
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Masukkan Nama Lengkap"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Masukkan Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  No. Handphone
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="number"
                  type="number"
                  placeholder="Masukkan No. Handphone"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <div className="text-center bg-[#3BB3C3] hover:bg-blue-700 mt-5 rounded-xl">
                <button className=" text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                  Daftar Sekarang
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
