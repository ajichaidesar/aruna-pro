import React from 'react';
import { logoaruna } from '../../assets/img/icon/index';
import { aruna2 } from '../../assets/img/icon/index';

const servicesData = [
  {
    id: 1,
    logo: logoaruna,
    title: 'Rumah Aruna',
    description: 'Pre School dan Kindergarten',
  },
  {
    id: 2,
    logo: aruna2,
    title: 'Aruna SDC',
    description: 'Lembaga Konsultan Pendidikan',
  },
];

const Layanan = () => {
  return (
    <div className='max-w-full mx-auto bg-orange-500 w-screen px-3 pt-5 pb-10 sm:pb-40 flex justify-center items-center overflow-hidden rounded-b-none relative flex-col'>
      <div className='w-[1400px] h-[3100px] rotate-90 bg-white mt-[1700px] sm:mt-[1750px] rounded-full rounded-tr-none rounded-br-none absolute' />
      <div className='flex'>
        <h3 className='text-white text-2xl md:text-3xl pt-1'>Layanan Kami</h3>
      </div>
      <div className='flex-row flex mt-8'>
        <div className='w-[2500] sm:w-[3100px] h-[1000] sm:h-[1400px] -rotate-90 bg-white mt-[1700px] rounded-full rounded-tr-none rounded-br-none absolute' />
        {servicesData.map((service) => (
          <div
            className='bg-white rounded-md p-4 w-[170] sm:w-[200px] first:shadow-lg flex flex-col items-center mx-8'
            key={service.id}
          >
            <div>
              <img src={service.logo} alt='service logo' className='h-18' />
            </div>
            <div className='text-center'>
              <h3 className='text-xl mt-2'>{service.title}</h3>
              <p className='text-sm mt-2'>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Layanan;
