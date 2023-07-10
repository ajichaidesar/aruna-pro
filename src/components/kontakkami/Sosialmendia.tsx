import React from 'react';

const Sosialmendia = () => {
  const socialMediaData = [
    {
      name: 'Instagram',
      icon: 'fa-brands fa-square-instagram',
      url: 'https://www.instagram.com',
    },
    {
      name: 'Facebook',
      icon: 'fa-brands fa-facebook',
      url: 'https://www.facebook.com',
    },
    {
      name: 'Twitter',
      icon: 'fa-brands fa-twitter',
      url: 'https://www.twitter.com',
    },
  ];

  return (
    <div className='mb-3 font-andika'>
      <h3 className='text-2xl sm:text-3xl text-black'>SOSIAL MEDIA</h3>
      <ul className='pl-2'>
        {socialMediaData.map((item, index) => (
          <li className='pb-2' key={index}>
            <i className={item.icon}></i>
            <a
              href={item.url}
              className='hover:text-blue-500 pl-2 text-md sm:text-xl'
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sosialmendia;
