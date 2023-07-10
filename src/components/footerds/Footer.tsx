import React from 'react';
import { logoaruna } from '../../assets/img/icon/index';
import { logo1 } from '../../assets/img/icon/index';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className='max-w-7xl mx-auto p-5 bg-gray-auto'>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-2'>
          <div className='mb-3'>
            <img src={logoaruna} alt='logoaruna' />
            <h4>Alamat :</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>

          <div className='mb-3 pl-0 sm:pl-10'>
            <h4>BERANDA</h4>
            <ul>
              <li className='pb-2'>
                <Link to={'Tentang'} className='hover:text-blue-500'>
                  Tentang Kami
                </Link>
              </li>
              <li className='pb-2'>
                <Link to={'Kontak'} className='hover:text-blue-500'>
                  Kontak Kami
                </Link>
              </li>

              <li className='pb-2'>
                <Link to={'Artikel'} className='hover:text-blue-500'>
                  Artikel
                </Link>
              </li>
            </ul>
          </div>

          <div className='mb-3'>
            <h4>LAYANAN</h4>
            <ul>
              <li className='pb-2'>
                <Link to={'Rumaharuna'} className='hover:text-blue-500'>
                  Rumah Aruna
                </Link>
              </li>
              <li className='pb-2'>
                <Link to={'Arunasdc'} className='hover:text-blue-500'>
                  Aruna SDC
                </Link>
              </li>
            </ul>
          </div>

          <div className='mb-3 '>
            <h4>KONTAK KAMI</h4>
            <ul>
              <li className='pb-2'>
                <i className='fa-solid fa-phone'></i>
                <a href='#' className='hover:text-blue-500'>
                  {' '}
                  082211223399{' '}
                </a>
              </li>
              <li className='pb-2'>
                <i className='fa-solid fa-envelope'></i>
                <a href='#' className='hover:text-blue-500'>
                  {' '}
                  rumaharuna@gmail.com{' '}
                </a>
              </li>
            </ul>
          </div>

          <div className='mb-3 '>
            <h4>SOSIAL MEDIA</h4>
            <ul>
              <li className='pb-2'>
                <i className='fa-brands fa-square-instagram'></i>
                <a href='#' className='hover:text-blue-500'>
                  {' '}
                  Instagram
                </a>
              </li>
              <li className='pb-2'>
                <i className='fa-brands fa-facebook'></i>
                <a href='#' className='hover:text-blue-500'>
                  {' '}
                  Facebook
                </a>
              </li>
              <li className='pb-2'>
                <i className='fa-brands fa-twitter'></i>
                <a href='#' className='hover:text-blue-500'>
                  {' '}
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          <div className='mb-3'>
            <h4>COLABORATION WITH</h4>
            <img src={logo1} alt='image1' />
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center px-2 py-4'>
        <p>Copyright ©2023 Rumah Aruna. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
