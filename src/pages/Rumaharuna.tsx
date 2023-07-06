import React, { useState } from "react";
import { aruna1 } from "../assets/img/galery/index";
import { image1 } from "../assets/img/galery/index";
import { image2 } from "../assets/img/galery/index";
import { image3 } from "../assets/img/galery/index";
import { image4 } from "../assets/img/galery/index";
import { image5 } from "../assets/img/galery/index";
import { icon1 } from "../assets/img/icon";
import { Whatsapp } from "../assets/img/icon/index";
import { Symbol } from "../assets/img/icon/index";
// import Kurikulum from "../pages/Kurikulum";
// import Kurikulum from "../components/Kurikulum";
// import { Fa } from "react-icons/fa";
// import { FaSquareWhatsapp } from "react-icons/fa6";
// import { FaDownload } from "react-icons/fa6";

// import image10 from '../assets/img/galery/image10.png'
import { Link } from "react-router-dom";

const Rumaharuna = () => {
  let [open, setOpen] = useState(false);
  return (
    <div
      className="w-full  
    bg-white  py-32 lg:py-50   "
    >
      <div onClick={() => setOpen(!open)}></div>
      <div className="bg-[#EF841A] w-full p-3  mt-[-24px] ">
        <p className="text-sm">Beranda &gt; Rumah Aruna </p>
      </div>
      <div className="p-10  ">
        <h3 className="text-xl text-[#EF841A] font-bold mb-5">Profil Rumah Aruna</h3>
        <div className="flex flex-col-reverse sm:flex-row sm:mb-20 sm:mx-6 ">
          <p className="sm:text-lg sm:mt-20 sm:p-10 pl-2 w-200 text-justify">
            Aruna School Development Consultant (Aruna SDC) Rumah Aruna berdiri pada tahun 2016. Rumah Aruna adalah sekolah pre-school dan kindergarten yang membawa semangat pendidikan yang berpihak pada anak. Rumah Aruna juga menerapkan
            Differentiated Learning, setiap anak memiliki kurikulumnya sendiri.
          </p>
          <img className="mt-2" src={aruna1} alt="aruna1" />
        </div>
      </div>
      <div className="sm:pl-20 pl-0 mx-10">
        <div className="flex ">
          <i className="fa fa-paper-plane w-[38.13px] h-[37.12px] left-[1.67px] rotate-[-4.46]"></i>
          <p className="font-bold">VISI</p>
        </div>
        <p className="pl-3">"Menjadi lembaga Pendidikan Anak Usia Dini (PAUD) yang unggul dalam membangun kemitraan sekolah dengan orangtua."</p>
      </div>
      <div className="mt-10 sm:pl-20 pl-0 mx-10">
        <div className="flex ">
          <i className="fa fa-paper-plane w-[40.03px] h-[40.03px]"></i>
          <p className="font-bold pl-3">MISI</p>
        </div>
        <ul className=" list-disc mx-10 sm:w-100">
          <li>Mengembangkan kemitraan antara sekolah dengan orangtua dan mendukung orangtua sebagai guru pertama anak.</li>
          <li>Memfasilitasi pengembangan profesionalisme dari guru, keterampilan pengasuhan orangtua dan pengasuh anak.</li>
          <li>Mengintegrasikan masyarakat sebagai sumber belajar.</li>
          <li>Menciptakan lingkungan belajar seperti suasana rumah. </li>
          <li>Memfasilitasi seluruh area perkembangan anak.</li>
          <li>Melakukan diferensiasi dalam pembelajaran untuk memenuhi kebutuhan belajar setiap anak.</li>
        </ul>
      </div>
      <div className="p-10">
        <div className="flex ">
          <i className="fa fa-paper-plane "></i>
          <p className="font-bold pl-7">FILOSOFI SEKOLAH</p>
        </div>
        <p className="pl-10 mt-5 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas
          eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
          ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
        </p>
      </div>
      <div className="mt-20">
        <p className="text-xl font-bold text-center">Kurikulum Rumah Aruna</p>
          <div className="text-right pr-10 text-md sm:text-xl mt-5 ">
            <Link to={"kurikulum"} className="text-blue-400">Lihat Kurikulum </Link>
            <span className='pl-2'><i className="fa-solid fa-chevron-up fa-rotate-90 p-1 bg-blue-400  hover:text-white rounded-full " /></span>
          </div>
        <div className="max-w-7xl sm:mx-auto p-5 justify-center items-center sm:m-8 grid grid-cols-2 sm:grid-cols-4 gap-2">
          <div className="bg-white rounded-md p-6 shadow-lg flex flex-col items-center mb-5 mx-5">
            <div>
              <img src={icon1} alt="icon1" className="h-20" />
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-md sm:text-xl mt-2">HOLISTIC LEARNING</h3>
              <p className="text-xs sm:text-sm mt-2 ">Pendekatan pembelajaran yang memberikan kesempatan anak berkembang secara utuh.</p>
            </div>
          </div>

          <div className="bg-white rounded-md p-6 shadow-lg flex flex-col items-center mb-5 mx-2">
            <div>
              <img src={icon1} alt="icon1" className="h-20" />
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-md sm:text-xl mt-2">DIFFERENTIATED LEARNING</h3>
              <p className="text-xs sm:text-sm mt-2">Pembedaan dalam penyampaian materi, proses, dan produk pembelajaran berdasarkan kesiapan, minat, dan kebutuhan anak.</p>
            </div>
          </div>

          <div className="bg-white rounded-md p-6 shadow-lg flex flex-col items-center mb-5 mx-5">
            <div>
              <img src={icon1} alt="icon1" className="h-20" />
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-md sm:text-xl mt-2">MONTESSORI</h3>
              <p className="text-xs sm:text-sm mt-2">Pendekatan dalam pendidikan yang filosofinya didasarkan pada rasa hormat pada keunikan setiap anak.</p>
            </div>
          </div>

          <div className="bg-white rounded-md p-6 shadow-lg flex flex-col items-center mb-5 mx-5">
            <div>
              <img src={icon1} alt="icon1" className="h-20" />
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-md sm:text-xl mt-2">MULTIPLE INTELLIGENCES</h3>
              <p className="text-xs sm:text-sm mt-2">Kecerdasan majemuk yang dikemukakan oleh Howard Gardner adalah teori yang mengatakan bahwa semua orang memiliki kecerdasan yang berbeda-beda.</p>
            </div>
          </div>
        </div>
        <p className="sm:text-4xl text-2xl sm:px-20 px-10 sm:py-10 pt-5  text-center">Program Kami</p>
        <div className="sm:px-20  p-5 flex ">
          <div className="h-200">
            <img src={image2} alt="image2" className="rounded-md w-[200px] sm:w-[300px]" />
          </div>
          <div className="sm:mx-10 pl-3 pt-0 sm:pt-5">
            <h3 className="sm:text-xl text-md font-bold my-2 sm:my-5">Sekolah Anak</h3>
            <div className="mt-2 sm:mt-10 flex text-[#3BB3C3] ">
              <button className="bg-[#3BB3C3] hover:bg-slate-500 text-xs sm:text-lg text-white px-2 sm:px-10 py-0 sm:py-2 rounded-xl sm:rounded-3xl flex items-center mr-4">
                <img src={Whatsapp} alt="Whatsapp" className="w-4 h-4 mr-0 sm:mr-2 " />
                Konsultasi Sekarang
              </button>
              <button className="border-4 hover:bg-slate-500 text-xs sm:text-lg hover:text-white px-0 sm:px-4 py-2 rounded-xl sm:rounded-3xl flex items-center">
                <img src={Symbol} alt="Symbol" className="w-4 h-4 sm:mr-2 " />
                Panduan Pendaftaran
              </button>
            </div>
          </div>
        </div>
        <div className="sm:px-20  p-5 flex ">
          <div className="h-200">
            <img src={image2} alt="image2" className="rounded-md w-[200px] sm:w-[300px]" />
          </div>
          <div className="sm:mx-10 pl-3 pt-0 sm:pt-5">
            <h3 className="sm:text-xl text-md font-bold my-2 sm:my-5">Sekolah Anak</h3>
            <div className="mt-2 sm:mt-10 flex text-[#3BB3C3] ">
              <button className="bg-[#3BB3C3] hover:bg-slate-500 text-xs sm:text-lg text-white px-2 sm:px-10 py-0 sm:py-2 rounded-xl sm:rounded-3xl flex items-center mr-4">
                <img src={Whatsapp} alt="Whatsapp" className="w-4 h-4 mr-0 sm:mr-2 " />
                Konsultasi Sekarang
              </button>
              <button className="border-4 hover:bg-slate-500 text-xs sm:text-lg hover:text-white px-0 sm:px-4 py-2 rounded-xl sm:rounded-3xl flex items-center">
                <img src={Symbol} alt="Symbol" className="w-4 h-4 sm:mr-2 " />
                Panduan Pendaftaran
              </button>
            </div>
          </div>
        </div>

        
        <div className="mt-20">
          <p className="sm:text-4xl text-2xl text-center">Kegiatan</p>
          <div className="mt-3 p-5 sm:p-10 grid grid-cols-3 sm:grid-cols-3 gap-2">
            <div className="h-15 rounded-lg">
              <img src={image1} alt="image1" />
            </div>
            <div className="h-15 rounded-lg overflow-hidden">
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

export default Rumaharuna;
