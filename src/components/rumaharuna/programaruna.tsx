import React from 'react';
import { Symbol, Whatsapp } from '../../assets/img/icon/index';
import { image2 } from '../../assets/img/galery/index';

import Detailprogram from './Detailprogram';
import { Link } from 'react-router-dom';

const programData = [
  {
    image: image2,
    title: 'Sekolah Anak',
    phoneNumber: '1234567890',
    guideUrl: 'https://example.com/guide1',
  },
  {
    image: image2,
    title: 'Mitra Sekolah',
    phoneNumber: '9876543210',
    guideUrl: 'https://www.google.com',
  },
];

const openWhatsAppChat = (phoneNumber: string) => {
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
  window.open(url, '_blank');
};

const programaruna = () => {
  const renderPrograms = () => {
    return programData.map((program, index) => (
      <>
        <div
          className='sm:px-20 bg-white hover:bg-slate-200 shadow-xl rounded-2xl mx-10 p-5 mt-5 sm:flex font-andika'
          key={index}
        >
          <div className='h-200'>
            <img
              src={program.image}
              alt={`image${index}`}
              className='rounded-md w-[300px] sm:w-[300px]'
            />
          </div>
          <div className='pl-0  sm:pl-8 pt-0 sm:pt-5'>
            <h3 className='sm:text-xl  text-md font-bold my-2 sm:my-5'>
              {program.title}
            </h3>
            <div className='mt-2 sm:mt-10 flex text-[#3BB3C3]'>
              <button
                className='bg-[#3BB3C3] hover:bg-slate-500 text-xs sm:text-lg text-white px-2 sm:px-4  py-0 sm:py-2 rounded-xl sm:rounded-3xl flex items-center mr-2'
                onClick={() => openWhatsAppChat(program.phoneNumber)}
              >
                <img
                  src={Whatsapp}
                  alt='Whatsapp'
                  className='w-4 h-4 mr-0 sm:mr-2'
                />
                Konsultasi Sekarang
              </button>
              <button
                className='border-4 hover:bg-slate-500 text-xs sm:text-lg hover:text-white px-0 sm:px-4 py-2 rounded-xl sm:rounded-3xl flex items-center'
                onClick={() => window.open(program.guideUrl, '_blank')}
              >
                <img src={Symbol} alt='Symbol' className='w-4 h-4 sm:mr-2' />
                Panduan Pendaftaran
              </button>
            </div>
          </div>
        </div>
      </>
    ));
  };

  return <div>{renderPrograms()}</div>;
};

export default programaruna;
