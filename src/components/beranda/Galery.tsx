import React from 'react';
import {
  image1,
  image2,
  image3,
  image4,
  image5,
} from '../../assets/img/galery';
const Gallery = () => {
  return (
    <div>
      <div>
        <div className='mt-20'>
          <p className='sm:text-4xl font-andika text-2xl text-center'>
            Galeri Rumah Aruna
          </p>
          <div className='mt-3 p-5 sm:p-10 grid grid-cols-3 sm:grid-cols-3 gap-2'>
            <div className='h-15 rounded-lg'>
              <img src={image1} alt='image1' />
            </div>
            <div className='h-15 rounded-lg  overflow-hidden'>
              <img src={image2} alt='image2' className='h-full' />
            </div>
            <div className='h-15 rounded-lg'>
              <img src={image3} alt='image3' className='h-full' />
            </div>
            <div className='h-15 rounded-lg'>
              <img src={image4} alt='image4' className='h-full' />
            </div>
            <div className='h-15 rounded-lg'>
              <img src={image5} alt='image5' className='h-full' />
            </div>
            <div className='h-15 rounded-lg'>
              <img src={image2} alt='image2' className='h-full' />
            </div>
            <div className='h-15 rounded-lg'>
              <img src={image3} alt='image3' />
            </div>
            <div className='h-15 rounded-lg'>
              <img src={image4} alt='image4' className='h-full' />
            </div>
            <div className='h-15 rounded-lg'>
              <img src={image5} alt='image5' className='h-full' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
