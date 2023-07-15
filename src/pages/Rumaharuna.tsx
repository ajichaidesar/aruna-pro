import React from 'react';
import { aruna1 } from '../assets/img/galery/index';
import Visiaruna from '../components/rumaharuna/visiaruna';
import Misiaruna from '../components/rumaharuna/Misiaruna';
import Filosofiaruna from '../components/rumaharuna/Filosofiaruna';
import Programaruna from '../components/rumaharuna/programaruna';
import Kegiatanaruna from '../components/rumaharuna/Kegiatanaruna';
import Kurikulumaruna from '../components/rumaharuna/kurikulumaruna';

interface Section {
  heading: string;
  content: string;
  image: string;
  alt: string;
}

const Rumaharuna: React.FC = () => {
  const data: Section[] = [
    {
      heading: 'Profil Rumah Aruna',
      content:
        'Rumah Aruna berdiri pada tahun 2016. Rumah Aruna adalah sekolah pre-school dan kindergarten yang membawa semangat pendidikan yang berpihak pada anak. Rumah Aruna juga menerapkan Differentiated Learning, setiap anak memiliki kurikulumnya sendiri.',
      image: aruna1,
      alt: 'aruna1',
    },
    // Add more data objects for additional sections if needed
  ];

  return (
    <div className='w-full bg-white px-2 sm-px-8 pt-120 mt-40'>
      {data.map((section, index) => (
        <div key={index} className='p-3'>
          <h3 className='text-xl text-[#EF841A] font-bold mb-2 font-andika text-[36px]'>
            {section.heading}
          </h3>
          <div className='flex flex-col-reverse sm:flex-row sm:mb-10 sm:mx-6'>
            <p className='sm:text-lg sm:mt-20 sm:p-5 pl-2 w-200 text-justify sm:text-left font-andika'>
              {section.content}
            </p>
            <img
              className='mt-2 h-150 w-200 sm:w-500 sm:h-300'
              src={section.image}
              alt={section.alt}
            />
          </div>
        </div>
      ))}
      <Visiaruna />
      <Misiaruna />
      <Filosofiaruna />
      <Kurikulumaruna />
      <Programaruna />
      <Kegiatanaruna />
    </div>
  );
};

export default Rumaharuna;
