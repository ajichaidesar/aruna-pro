import React from 'react'
import {pendiri} from '../assets/img/galery/index'
import {Logo} from '../assets/img/galery/index'
import {aruna2} from '../assets/img/galery/index'

const Tentang = () => {
  return (
    <div className='w-full bg-white  py-32 lg:py-50   '>
      <div>       
        </div>
        <div className='bg-[#EF841A] w-full p-3  mt-[-24px] '>
          <p className='text-md sm:text-xl'>Beranda &gt; Tentang Kami </p>
        </div>
        <div className='sm:px-20 sm:py-10 '>
          <p className='text-[#EF841A] text-4xl px-5'>Tentang Kami</p>
          <div className='sm:flex sm:mt-10 mt-5 p-5 '>
            <img src={pendiri} alt='pendiri' className='rounded-xl pl-10 sm:pl-0  ' />
            <div className='sm:mx-10'>
              <p className='sm:text-2xl text-xl font-bold mt-3'>Pendiri Rumah Aruna & Aruna SDC</p>
              <p className='sm:mt-5 mt-3 text-md sm:text-lg sm:mr-20'> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, 
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum 
                tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat 
                lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque 
                ante pulvinar. 
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col-reverse sm:flex-row sm:p-20 p-5  mr-5'>
          <div className='mt-20'>
            <p className='text-2xl mb-2 font-bold'>Rumah Aruna</p>
            
            <p className='mb-3 '>
              Sekolah pre-school dan kindergarten yang menerapkan Differentiated Learning. Membawa semangat pendidikan yang berpihak pada anak
              <span className='pl-5'><i className="fa-solid fa-chevron-up fa-rotate-90 p-1 bg-blue-400 hover:bg-blue-800 hover:text-white rounded-full " /></span>
            </p>
             
            
          </div >
          <img className='h-60' src={Logo} alt="Logo" />
        </div>
        <hr />
        <div className='sm:flex sm:p-10 sm:px-5 p-5  mr-5'>
          <img src={aruna2} alt="Aruna2" />
          <div className='sm:mt-20 sm:pl-10 pl-3 sm:w-1/2'>
            <p className='text-2xl mb-2 font-bold'>Aruna SDC</p>
            
            <p className='mb-3'>
            Lembaga konsultan pendidikan yang memberikan pelatihan dan konsultasi kepada kepala sekolah, guru, orang tua dan pengasuh anak 
              <span className='pl-5'><i className="fa-solid fa-chevron-up fa-rotate-90 p-1 bg-blue-400 hover:bg-blue-800 hover:text-white rounded-full " /></span>
            </p>
             
            
          </div>
        </div>

    </div>
  )
}

export default Tentang;