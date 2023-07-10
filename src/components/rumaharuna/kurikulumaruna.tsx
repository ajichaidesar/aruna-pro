import React from 'react';
import { Link } from 'react-router-dom';
import { icon1 } from '../../assets/img/icon';

const data = [
  {
    title: 'HOLISTIC LEARNING',
    description: 'Pendekatan pembelajaran yang memberikan kesempatan anak berkembang secara utuh.',
  },
  {
    title: 'DIFFERENTIATED LEARNING',
    description: 'Pembedaan dalam penyampaian materi, proses, dan produk pembelajaran berdasarkan kesiapan, minat, dan kebutuhan anak.',
  },
  {
    title: 'MONTESSORI',
    description: 'Pendekatan dalam pendidikan yang filosofinya didasarkan pada rasa hormat pada keunikan setiap anak.',
  },
  {
    title: 'Multiple Intelligences',
    description: 'Kecerdasan Majemuk yang dikemukakan oleh Howard Gardner adalah teori yang mengatakan bahwa semua orang memiliki kecerdasan yang berbeda-beda.',
  },
];

const kurikulumaruna = () => {
  return (
    <div className="mt-20">
      <p className="text-xl font-bold text-center">Kurikulum Rumah Aruna</p>
      <div className="text-right pr-10 text-md sm:text-xl mt-5 ">
        <Link to={'kurikulum'} className="text-blue-400">
          Lihat Kurikulum
        </Link>
        <span className="pl-2">
          <i className="fa-solid fa-chevron-up fa-rotate-90 p-1 bg-blue-400  hover:text-white rounded-full " />
        </span>
      </div>
      <div className="max-w-7xl sm:mx-auto p-5 justify-center items-center sm:m-8 grid grid-cols-2 sm:grid-cols-4 gap-2">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-md p-6 shadow-lg flex flex-col items-center mb-5 mx-5"
          >
            <div>
              <img src={icon1} alt="icon1" className="h-20" />
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-md sm:text-xl mt-2">{item.title}</h3>
              <p className="text-xs sm:text-sm mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default kurikulumaruna;
