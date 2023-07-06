import React from 'react'
import {hero1} from '../assets/img/icon/index'



const hero = () => {
  return (
    <div className='max-w-7xl mb-20 mx-auto lg:h[85vh]   bg-white 
     pt-32 xl:px-20 px-10 flex flex-col-reverse lg:flex-row'> 
        <div >        
          <div className='font-satisfy'>
            <h3 className='text-4xl   text-[#EF841A] '>Rumah Aruna</h3>
            <p className='mt-2 sm:mt-5 text-md sm:text-xl mr-10 text-[#EF841A]'>Sekolah pre-school dan kindergarten yang menerapkan Differentiated Learning
              Membawa semangat pendidikan yang berpihak pada anak
            </p>
            <div className='pl-20 sm:pl-0'>
              <div className=' items-center flex text-white mt-10 sm:mt-20 bg-[#3BB3C3] hover:bg-gray-500 w-60 sm:w-80 p-2  rounded-2xl'>
                <i className="text-2xl fa-brands fa-whatsapp pl-5 sm:pl-10 "/>
                <p className='pl-2 text-md sm:text-xl '>Konsultasi Sekarang</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <img className='w-500 pr-20' src={hero1} alt='hero1' />
        </div>
      
    </div>
  )
}

export default hero;