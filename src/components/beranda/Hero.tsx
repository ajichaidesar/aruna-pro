
import React from 'react';
import { hero1 } from '../../assets/img/icon/index';

const heroData = [
  {
    Judul_slide: 'Rumah Aruna ',
    Descripsi_slide:
      'Sekolah pre-school dan kindergarten yang menerapkan Differentiated Learning Membawa semangat pendidikan yang berpihak pada anak',
    Telp_slide: '+6282211223399',
    Image_slide: hero1,
  },
];
const openWhatsAppChat = (phoneNumber: string) => {
  const url = `https://api.whatsapp.com/send?phone=${+6282211223399}`;
  window.open(url, '_blank');
};

const Hero = () => {
  return (
    <div className='w-1512 h-616 flex-shrink-0 mx-auto bg-white pt-32 xl:px-20 px-10 flex flex-col-reverse lg:flex-row'>
      {heroData.map((hero, index) => (
        <>
          <div key={index}>
            <div>
              <h3 className='text-[64px] font-satisfy font-normal text-[#EF841A] leading-normal'>
                {hero.Judul_slide}
              </h3>
              <p className='mt-2 sm:mt-5 font-andika text-base sm:text-xl mr-10 text-[#EF841A]' style={{width: '647px',
                height: '166px', color: '#EF841A', fontFamily: 'Andika', fontSize: '28px', fontStyle: 'normal', fontWeight: 400, lineHeight: '34px'}}>
                {hero.Descripsi_slide}
              </p>
              <button
                className='pl-20 sm:pl-0'
                onClick={() => openWhatsAppChat(hero.Telp_slide)}
              >
                <div className='items-center flex text-white mt-10 sm:mt-20 bg-[#3BB3C3] hover:bg-gray-500 w-60 sm:w-80 p-2 rounded-2xl'>
                  <i className='text-2xl fa-brands fa-whatsapp pl-5 sm:pl-10' />
                  <p className='pl-2 font-andika text-md sm:text-xl'>
                    Konsultasi Sekarang
                  </p>
                </div>
              </button>
            </div>
          </div>
          <div>
            <img
              className='w-500 pr-20'
              src={hero.Image_slide}
              alt={`hero${index + 1}`}
            />
          </div>
        </>
      ))}
    </div>
  );
};

export default Hero;
