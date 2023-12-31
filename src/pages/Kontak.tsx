import React from 'react';
import { aruna1 } from '../assets/img/galery';
import Map from '../components/kontakkami/Map';
import Register2 from '../components/kontakkami/Register2';

const kontak = () => {
  const data = [
    {
      id: 1,
      image: aruna1,
      address:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ',
    },
  ];

  return (
    <div className='w-full bg-white font-andika py-32 lg:py-50 flex flex-col'>
      <div className='bg-[#EF841A] w-full p-3 mt-[-24px]'>
        <p className='text-lg'>Beranda &gt; Kontak</p>
      </div>
      <div>
        <p className='pt-8 pl-5 sm:pl-10 text-xl sm:text-3xl text-[#EF841A]'>
          Hubungi Kami
        </p>
      </div>
      {data.map((item) => (
        <div className='sm:flex font-andika' key={item.id}>
          <img
            src={item.image}
            alt={`Image ${item.id}`}
            className='p-10 w-100'
          />
          <div className='px-10 mt-5 sm:mt-40'>
            <p>Alamat :</p>
            <p>{item.address}</p>
          </div>
        </div>
      ))}
      <Map />
      <Register2 />
    </div>
  );
};

export default kontak;
