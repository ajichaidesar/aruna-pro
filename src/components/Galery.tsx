import React from 'react'
import {image1} from '../assets/img/galery/index'
import {image2} from '../assets/img/galery/index'
import {image3} from '../assets/img/galery/index'
import {image4} from '../assets/img/galery/index'
import {image5} from '../assets/img/galery/index'

const Galery = () => {
  return (
    <div className='max-w-7xl  mx-auto  '>
      <div className='text-3xl text-center z-10'>
        <h1 >Galeri Rumah Aruna</h1>
      </div>
      <div className='mt-3 p-5 grid grid-cols-6 sm:grid-cols-6 gap-2'>
        <div className="h-15 rounded-lg  col-span-2"><img className='object-cover' src={image1} alt='image1'/></div>        
        <div className="h-15 rounded-lg overflow-hidden col-span-2"><img className='object-cover h-full ' src={image2} alt='image2'/></div>
        <div className="h-15 rounded-lg  col-span-2"><img className='object-cover' src={image3} alt='image3'/></div>
        <div className="h-15 rounded-lg  col-span-3"><img className='object-cover' src={image4} alt='image4'/></div>
        <div className="h-15 rounded-lg  col-span-3"><img className='object-cover'src={image5} alt='image5'/></div>
                      
      </div>
    </div>
  )
}

export default Galery