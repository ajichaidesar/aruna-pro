import React from 'react'
import { Plane } from "../../assets/img/icon";


const vissionStatements = [
  'Menjadi lembaga Pendidikan Anak Usia Dini (PAUD) yang unggul dalam membangun kemitraan sekolah dengan orangtua.',
];

const Visiaruna = () => {

  return (
    <div className="w-full bg-white">
      <div className="mt-5 sm:pl-10 p-5">
        <div className="flex">
          <img src={Plane} alt="Plane" className="h-7" />
          <p className="pl-2 font-bold">VISI</p>
        </div>
        <ul className="list-disc mx-4 sm:w-100 text-sm sm:text-lg text-justify">
          {vissionStatements.map((statement, index) => (
            <li key={index}>{statement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Visiaruna;