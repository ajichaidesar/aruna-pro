import React from "react";
import { artikel1 } from "../assets/img/galery/index";
import { Link } from "react-router-dom";
import Detailartikel from "../components/Detailartikel";

const Artikel = () => {
  return (
    <div className="w-full bg-white  py-32 lg:py-50   ">
      <div></div>
      <div className="bg-[#EF841A] w-full p-3  mt-[-24px] ">
        <p className="text-md sm:text-xl">Beranda &gt; Artikel </p>
      </div>
      <p className="sm:text-4xl text-2xl sm:px-20 px-10 sm:py-10 pt-5 text-[#EF841A]">Artikel</p>
      <div className="sm:px-20  p-5 sm:flex">
        <img src={artikel1} alt="artikel1" className="rounded-md" />
        <div className="sm:mx-10 pt-5">
          <p className="text-gray-400 xl:text-lg text-xs">05 April 2023</p>
          <h3 className="sm:text-2xl text-md font-bold my-5">Beragam Manfaat Pendidikan Anak Usia Dini dan Kekurangannya</h3>
          <p className="text-sm sm:text-xl">
            Pendidikan anak usia dini (PAUD) dapat membantu proses perkembangan anak lebih optimal. Beberapa manfaat yang bisa didapat oleh anak yang mengikuti PAUD antara lain belajar bersosialisasi dengan teman sebayanya, mengelola stres,
            dan menyelesaikan masalah...{" "}
            <a href="Detailartikel" className="text-blue-400">
              Baca selengkapnya
            </a>
          </p>
        </div>
      </div>

      <div className="sm:px-20  p-5 sm:flex">
        <img src={artikel1} alt="artikel1" className="rounded-md" />
        <div className="sm:mx-10 pt-5">
          <p className="text-gray-400 xl:text-lg text-xs">05 April 2023</p>
          <h3 className="sm:text-2xl text-md font-bold my-5">Beragam Manfaat Pendidikan Anak Usia Dini dan Kekurangannya</h3>
          <p className="text-sm sm:text-xl">
            Pendidikan anak usia dini (PAUD) dapat membantu proses perkembangan anak lebih optimal. Beberapa manfaat yang bisa didapat oleh anak yang mengikuti PAUD antara lain belajar bersosialisasi dengan teman sebayanya, mengelola stres,
            dan menyelesaikan masalah... <span className="text-blue-400"> Baca selengkapnya</span>
          </p>
        </div>
      </div>

      <div className="sm:px-20  p-5 sm:flex">
        <img src={artikel1} alt="artikel1" className="rounded-md" />
        <div className="sm:mx-10 pt-5">
          <p className="text-gray-400 xl:text-lg text-xs">05 April 2023</p>
          <h3 className="sm:text-2xl text-md font-bold my-5">Beragam Manfaat Pendidikan Anak Usia Dini dan Kekurangannya</h3>
          <p className="text-sm sm:text-xl">
            Pendidikan anak usia dini (PAUD) dapat membantu proses perkembangan anak lebih optimal. Beberapa manfaat yang bisa didapat oleh anak yang mengikuti PAUD antara lain belajar bersosialisasi dengan teman sebayanya, mengelola stres,
            dan menyelesaikan masalah... <span className="text-blue-400"> Baca selengkapnya</span>
          </p>
        </div>
      </div>

      <div className="sm:px-20  p-5 sm:flex">
        <img src={artikel1} alt="artikel1" className="rounded-md" />
        <div className="sm:mx-10 pt-5">
          <p className="text-gray-400 xl:text-lg text-xs">05 April 2023</p>
          <h3 className="sm:text-2xl text-md font-bold my-5">Beragam Manfaat Pendidikan Anak Usia Dini dan Kekurangannya</h3>
          <p className="text-sm sm:text-xl">
            Pendidikan anak usia dini (PAUD) dapat membantu proses perkembangan anak lebih optimal. Beberapa manfaat yang bisa didapat oleh anak yang mengikuti PAUD antara lain belajar bersosialisasi dengan teman sebayanya, mengelola stres,
            dan menyelesaikan masalah... <span className="text-blue-400"> Baca selengkapnya</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Artikel;
