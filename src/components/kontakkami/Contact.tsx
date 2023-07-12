import React from 'react';

const Contact = () => {
  const contactData = [
    { type: 'phone', value: '082211223399', url: 'tel:082211223399' },
    {
      type: 'email',
      value: 'rumaharuna@gmail.com',
      url: 'mailto:rumaharuna@gmail.com',
    },
  ];

  return (
    <div className='mb-3 font-andika'>
      <h3 className='text-lg sm:text-xl'>Kontak Kami</h3>
      <ul>
        {contactData.map((contact, index) => (
          <li key={index} className='pb-2'>
            {contact.type === 'phone' ? (
              <i className='fa-solid fa-phone text-md sm:text-2xl mb-3'></i>
            ) : (
              <i className='fa-solid fa-envelope text-2xl mb-3'></i>
            )}
            <a
              href={contact.url}
              className='hover:text-blue-500 pl-2 text-md sm:text-xl'
            >
              {contact.value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
