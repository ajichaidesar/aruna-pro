import React from 'react';
import { aruna2 } from '../assets/img/galery/index';
import { image1 } from '../assets/img/galery/index';
import { image2 } from '../assets/img/galery/index';
import { image3 } from '../assets/img/galery/index';
import { image4 } from '../assets/img/galery/index';
import { image5 } from '../assets/img/galery/index';

import Visisdc from '../components/rumaharuna/visiaruna';
import Misisdc from '../components/rumahsdc/Misisdc';
import Layanansdc from '../components/rumahsdc/Layanansdc';
import Kegiatansdc from '../components/rumahsdc/Kegiatansdc';

const Arunasdc = () => {
  return (
    <div
      className='w-full  
    bg-white  py-32 lg:py-50   '
    >
      <div className='bg-[#EF841A] w-full p-3  mt-[-24px] '>
        <p className='text-md'>Beranda &gt; Aruna SDC &gt; Workshop </p>
      </div>
      <div className='p-10  '>
        <h3 className='text-xl text-[#EF841A] font-bold mb-2'>
          Profil Aruna SDC
        </h3>
        <div className='flex flex-col-reverse sm:flex-row sm:mb-20 sm:mx-6 '>
          <p className='sm:text-lg sm:mt-20 sm:p-10 p-2 w-200 sm:justify-text-center'>
            Aruna School Development Consultant (Aruna SDC) didirikan pada tahun
            2015 oleh Ms Eva Sidabutar bersama rekannya Ms Indri. Aruna SDC
            adalah perusahaan konsultan yang menyediakan layanan konsultasi dan
            pelatihan dalam mengimplementasikan rencana pengembangan sekolah
            atau inisiatif-inisiatif peningkatan profesionalitas bagi segenap
            komunitas sekolah.
          </p>
          <img className='mt-2' src={aruna2} alt='aruna2' />
        </div>
      </div>
      <Visisdc />
      <Misisdc />
      <div className='mt-20'>
        <Layanansdc />
        <Kegiatansdc />
      </div>
    </div>
  );
};

export default Arunasdc;
