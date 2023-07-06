import React, { useState } from 'react'
import {logoaruna} from '../assets/img/icon/index'
import { Link } from "react-router-dom";
import Button from './Button';




const Nav = () => {    
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full  top-0 left-0 fixed z-10'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-5'>
        <div >
         <Link to={'/'} ><img src={logoaruna} alt="logoaruna" /></Link>
        </div>
        
      <div onClick={()=>setOpen(!open)} className='text-3xl  absolute right-8 top-6 cursor-pointer md:hidden'>
        
        <i className={open ? 'fa-solid fa-xmark':'fa-sharp fa-solid fa-bars'}></i>
      </div>
      
      <ul className={`md:flex md:items-center md:pb-0 pb-3 absolute md:static
       bg-white  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all 
       duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        <li className=' md:ml-8 text-xl md:my-0 my-7'>
          <Link to={`tentang`}>Tentang Kami</Link>
        </li>
        <li className=' md:ml-8 text-xl md:my-0 my-7'>
         <Button />
        </li>
        <li className=' md:ml-8 text-xl md:my-0 my-7'>
          <Link to={`kontak`}>Kontak Kami</Link>
        </li>
        <li className=' md:ml-8 text-xl md:my-0 my-7'>
          <Link to={`artikel`}>Artikel</Link>
        </li>
      </ul>
      </div>
    </div>
  )
}

export default Nav;