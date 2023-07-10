import React from 'react';
import { Logo, aruna2 } from '../assets/img/galery/index';

const data = [
  {
    title: 'Rumah Aruna',
    description:
      'Sekolah pre-school dan kindergarten yang menerapkan Differentiated Learning. Membawa semangat pendidikan yang berpihak pada anak',
    image: Logo,
  },
  {
    title: 'Aruna SDC',
    description:
      'Lembaga konsultan pendidikan yang memberikan pelatihan dan konsultasi kepada kepala sekolah, guru, orang tua dan pengasuh anak',
    image: aruna2,
  },
];

const Arunatentang = () => {
  return (
    <div className="w-full bg-white py-32 lg:py-50">
      {data.map((item, index) => (
        <div className="flex flex-col-reverse sm:flex-row sm:p-20 p-5 mr-5" key={index}>
          <div className="mt-20">
            <p className="text-2xl mb-2 font-bold">{item.title}</p>
            <p className="mb-3 w-50">
              {item.description}
              <span className="pl-5">
                <i className="fa-solid fa-chevron-up fa-rotate-90 p-1 bg-blue-400 hover:bg-blue-800 hover:text-white rounded-full " />
              </span>
            </p>
          </div>
          <img
            className="h-[200px] sm:h-[300px] w-[300px] sm:w-[400px]"
            src={item.image}
            alt={item.title}
          />
        </div>
      ))}
    </div>
  );
};

export default Arunatentang;
