import React from 'react';
import { Link } from 'react-router-dom';
import { image1, image2, image3, image4, image5 } from '../assets/img/galery';

const workshopsData = [
  {
    id: 1,
    title: 'Workshop ',
    date: '20 Maret 2023 09:00 AM',
    image: image1,
  },
  {
    id: 2,
    title: 'Workshop ',
    date: '21 Maret 2023 09:00 AM',
    image: image2,
  },
  {
    id: 3,
    title: 'Workshop ',
    date: '21 Maret 2023 09:00 AM',
    image: image3,
  },
  {
    id: 4,
    title: 'Workshop ',
    date: '21 Maret 2023 09:00 AM',
    image: image4,
  },
  {
    id: 5,
    title: 'Workshop ',
    date: '21 Maret 2023 09:00 AM',
    image: image5,
  },
];

const Workshop = () => {
  return (
    <div className='w-full bg-white py-32 lg:py-50'>
      <div className='bg-[#EF841A] w-full p-3 mt-[-24px]'>
        <p className='text-sm sm:text-md'>
          Beranda &gt; Aruna SDC &gt; Workshop{' '}
        </p>
      </div>
      <div className='text-xl text-center mt-5 font-bold'>
        <h3>Workshop Mendatang</h3>
      </div>
      <div>
        <div className='mt-3 p-5 sm:pl-20 grid grid-cols-2 sm:grid-cols-2 gap-5'>
          {workshopsData.map((workshop) => (
            <div
              key={workshop.id}
              className='bg-white shadow-md flex flex-col sm:flex-row sm:w-7xl p-3 rounded-lg'
            >
              <div className='h-30 rounded-lg'>
                <img
                  className='rounded-xl mt-2 h-full sm:mt-0'
                  src={workshop.image}
                  alt='Service'
                />
              </div>
              <div className='w-2xl mb-10 h-xl px-2 sm:pl-5 h-20 mt-3'>
                <h3 className='sm:text-xl text-lg text-center sm:text-left'>
                  {workshop.title}
                </h3>
                <div className='sm:mt-6 mt-2'>
                  <div className='flex'>
                    <i className='fa fa-calendar-days' />
                    <p className='text-xs pl-2'>{workshop.date}</p>
                  </div>
                  <div>
                    <div className='bg-[#3BB3C3] hover:bg- sm:text-center rounded-xl sm:mt-10 mt-5 sm-mb-0 sm:w-40 w-40 p-1 sm:text-lg text-sm text-center'>
                      <Link to={`/register/${workshop.id}`}>
                        Daftar Sekarang
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workshop;
