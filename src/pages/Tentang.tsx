import React from 'react';
import { pendiri } from '../assets/img/galery/index';
import Arunatentang from '../components/arunatentang';

const data = [
  {
    title: 'Pendiri Rumah Aruna & Aruna SDC',
    image: pendiri,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. ',
  },
  
];

const Tentang = () => {
  return (
    <div className="w-full bg-white py-32 lg:py-50">
      <div>
        <div className="bg-[#EF841A] w-full p-3 mt-[-24px]">
          <p className="text-md sm:text-xl">Beranda &gt; Tentang Kami</p>
        </div>
        <div className="sm:px-20 sm:py-10">
          <p className="text-[#EF841A] text-4xl px-5">Tentang Kami</p>
          {data.map((item, index) => (
            <div className="sm:flex sm:mt-10 mt-5 p-5" key={index}>
              <img
                src={item.image}
                alt={item.title}
                className="rounded-xl h-[300px] sm:h-[400px] pl-10 sm:pl-0"
              />
              <div className="sm:mx-10">
                <p className="sm:text-2xl text-xl font-bold mt-3">{item.title}</p>
                <p className="sm:mt-5 mt-3 text-md sm:text-lg sm:mr-21 text-justify">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Arunatentang/>
    </div>
  );
};

export default Tentang;
