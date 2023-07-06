import React from 'react'
import { Plane } from '../assets/img/icon'
const Kurikulum = () => {
  return (
    <div className='w-full bg-white  py-32 lg:py-50   '>
      <div>       
        </div>
        <div className='bg-[#EF841A] w-full p-3  mt-[-24px] '>
          <p className='text-md sm:text-xl'>Beranda &gt; Tentang Kami </p>
        </div>
        <div className='px-5 pt-3 mb-10 sm:mb-5 '>
          <p className='text-[#EF841A] text-2xl sm:text-xl px-2'>Kurikulum Rumah Aruna</p>
        </div>
        <div className='px-2 sm:px-10'>
          <div className='mb-7'>
            <div className='flex px-5'>
              <img src={Plane} alt="plane" className='h-6 sm:h-8' />
              <h3 className='pl-3 text-sm sm:text-xl font-bold'>HOLISTIC LEARNING</h3>
            </div>
            <div className='text-justify px-7 sm:px-5 mt-2'>
              <p className='text-sm sm:text-lg '>
                Pendekatan pembelajaran yang memberikan kesempatan anak berkembang secara utuh. 
                Utuh dalam arti seluruh aspek perkembangan anak, baik moral, fisik motorik, kognitif, 
                bahasa, sosial emosional dan seni dikembangkan sesuai dengan usianya. Pengembangan 
                keenam aspek perkembangan yang disebutkan diatas didasarkan pada sebuah standar yang 
                dikeluarkan pemerintah melalui Peraturan Menteri Pendidikan dan Kebudayaan Republik 
                Indonesia Nomor 137 Tahun 2014 tentang Standar Nasional Pendidikan Anak Usia Dini, 
                standar ini disebut dengan istilah STPPA (Standar Tingkat Pencapaian Perkembangan Anak).</p>
            </div>
          </div>
          <div className='mb-5'>
            <div className='flex pl-5'>
              <img src={Plane} alt="plane" className='h-6 sm:h-6' />
              <h3 className='pl-3 text-sm sm:text-lg font-bold'>DIFFERENTIATED LEARNING</h3>
            </div>
            <div className='text-justify px-7 sm:px-5 mt-2'>
              <p className='text-sm sm:text-lg '>
                Proses belajar mengajar dimana guru melakukan pembedaan dalam 
                penyampaian materi, proses dan produk pembelajaran berdasarkan 
                kesiapan, minat dan kebutuhan anak. Tujuannya adalah menumbuhkan 
                rasa senang dalam belajar guna mengoptimalkan perkembangan setiap 
                anak. Dalam pendekatan ini, setiap anak memiliki kurikulum mereka 
                masing-masing yang disebut dengan Menu Belajar. Karena itulah kami 
                memilih pendekatan Montessori sebagai salah satu pendekatan yang 
                mendasari penyusunan kurikulum di Rumah Aruna.
              </p>
            </div>
            <div className='p-5'>
              <p className='mb-3 p-2 sm:p-0'>Perbedaan kelas yang menerapkna Diferensiasi Belajar dan kelas Konvensional</p>
                <div className='flex  flex-row'>
                  <div>
                    <table className=" border-separate border-spacing-2">
                      <thead>
                        <tr>
                          <th className="bg-[#3BB3C3] p-2">Konvensional</th>
                          
                        </tr>
                      </thead>
                      <tbody className=' text-justify text-sm sm:text-lg'>
                        <tr className="bg-[#E7FCFF] p-20">Instruksi bersifat teacher centered</tr>
                        <tr className="bg-[#E7FCFF] p-5">Instruksi diberikan kepada siswa dalam kelompok besar</tr>
                        <tr className="bg-[#E7FCFF] p-5">Jika guru membagi siswa dalam kelompok. Kelompok biasanya dibagi berdasarkan kemampuan akademik/prestasi siswa (kurang berprestasi, sedang dan sangat berprestasi)</tr>
                        <tr className="bg-[#E7FCFF] p-5">Instruksi diberikan satu arah (ceramah/lecturing)</tr>
                        <tr className="bg-[#E7FCFF] p-5">Guru memberikan tugas yang sama untuk semua siswa</tr>
                        <tr className="bg-[#E7FCFF] p-5">Guru menggunakan penilaian sumatif untuk menilai hasil belajar siswa</tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <table className="border-separate border-spacing-2  border-slate-400">
                      <thead>
                        <tr>
                          <th className="bg-[#EF841A] p-2">Diferensiasi Belajar</th>
                          
                        </tr>
                      </thead>
                      <tbody className='mt-2'>
                        <tr className=" bg-[#FFF5EC]  p-5">Instruksi bersifat teacher centered</tr>
                        <tr className="bg-[#FFF5EC] p-5">Instruksi diberikan kepada siswa dalam kelompok besar</tr>
                        <tr className="bg-[#FFF5EC] p-5">Jika guru membagi siswa dalam kelompok. Kelompok biasanya dibagi berdasarkan kemampuan akademik/prestasi siswa (kurang berprestasi, sedang dan sangat berprestasi)</tr>
                        <tr className="bg-[#FFF5EC] p-5">Instruksi diberikan satu arah (ceramah/lecturing)</tr>
                        <tr className="bg-[#FFF5EC] p-5">Guru memberikan tugas yang sama untuk semua siswa</tr>
                        <tr className="bg-[#FFF5EC] p-5">Guru menggunakan penilaian sumatif untuk menilai hasil belajar siswa</tr>
                      </tbody>
                    </table>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Kurikulum