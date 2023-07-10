import React from 'react';
import { Plane } from '../../assets/img/icon';

const missionStatements = [
  'Mengembangkan kemitraan antara sekolah dengan orangtua dan mendukung orangtua sebagai guru pertama anak.',
  'Memfasilitasi pengembangan profesionalisme dari guru, keterampilan pengasuhan orangtua dan pengasuh anak.',
  'Mengintegrasikan masyarakat sebagai sumber belajar.',
  'Menciptakan lingkungan belajar seperti suasana rumah.',
  'Memfasilitasi seluruh area perkembangan anak.',
  'Melakukan diferensiasi dalam pembelajaran untuk memenuhi kebutuhan belajar setiap anak.',
  
];

const Misisdc = () => {

  return (
    <div className="w-full bg-white">
      <div className="mt-5 sm:pl-10 p-5">
        <div className="flex">
          <img src={Plane} alt="Plane" className="h-7" />
          <p className="pl-2 font-bold">MISI</p>
        </div>
        <ul className="list-disc mx-4 sm:w-100 text-sm sm:text-lg text-justify">
          {missionStatements.map((statement, index) => (
            <li key={index}>{statement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Misisdc;
