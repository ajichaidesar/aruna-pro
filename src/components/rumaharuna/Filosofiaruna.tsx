import React from 'react';
import { Plane } from '../../assets/img/icon';

const data = [
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. ',
  },
];

const Filosofiaruna = () => {
  return (
    <div className='w-full bg-white'>
      {data.map((item, index) => (
        <div className='mt-5 sm:pl-10 font-andika p-5' key={index}>
          <div className='flex'>
            <img src={Plane} alt='Plane' className='h-7' />
            <p className='font-bold pl-2'>FILOSOFI SEKOLAH</p>
          </div>
          <p className='mt-3 text-justify  text-sm sm:text-lg'>
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Filosofiaruna;
