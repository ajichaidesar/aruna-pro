import React, { useState } from "react";

// import image10 from '../assets/img/galery/image10.png'
// import { Link } from "react-router-dom";

const Kurikulum = () => {
  let [open, setOpen] = useState(false);
  return (
    <div
      className="w-full  
    bg-white  py-32 lg:py-50   "
    >
      <div onClick={() => setOpen(!open)}></div>
      <div className="bg-[#EF841A] w-full p-3  mt-[-24px] ">
        <p className="text-sm">Beranda &gt; Rumah Aruna &gt; Kurikulum</p>
      </div>
      <div>
        <h3>Kurikulum Rumah Aruna</h3>
      </div>
      <div>
        <h2>HOLISTIC LEARNING</h2>
        <p>
          Pendekatan pembelajaran yang memberikan kesempatan anak berkembang secara utuh. Utuh dalam arti seluruh aspek perkembangan anak, baik moral, fisik motorik, kognitif, bahasa, sosial emosional, dan seni dikembangkan sesuai dengan
          usianya. Pengembangan keenam aspek perkembangan yang disebutkan diatas didasarkan pada sebuah standar yang dikeluarkan pemerintah melalui Peraturan Menteri Pendidikan dan Kebudayaaan Republik Indonesia Nomor 137 Tahun 2014 tentang
          Standar Nasional Pendidikan Anak Usia Dini, standar ini disebut dengan istilah STPPA (Standar Tingkat Pencapaian Perkembangan Anak).
        </p>
      </div>
      <div>
        <div>
          <h2>DIFFERENTIATED LEARNING</h2>
          <p>
            Proses belajar mengajar dimana guru melakukan pembedaan dalam penyampaian materi, proses dan produk pembelajaran berdasarkan kesiapan, minat dan kebutuhan anak. Tujuannya adalah menumbuhkan rasa senang dalam belajar guna
            mengoptimalkan perkembangan setiap anak. Dalam pendekatan ini. Setiap anak memiliki kurikulum mereka masing-masing yang disebut dengan Menu Belajar. Karena itulah kami memilih pendekatan Montessori sebagai salah satu pendekatan
            yang mendasari penyusunan kurikulum di Rumah Aruna.
          </p>
          <p className="my-3 ">Perbedaan kelas yang menerapkan Difrensiasi Belajar dan kelas Konvensional</p>
        </div>
        <div className="container">
          <div className="column">
            <h2>KonvensionalL</h2>
            <ul>
              <li>Instruksi bersifat teacher centered</li>
              <li>Instruksi diberikan kepada siswa dalm kelompok besar</li>
              <li>Jika guru membagi siswa dalam kelompok kelompok biasanya dibagi berdasarkan kemampuan akademik/prestasi siswa (kurang berprestasi, sedang dan sangat berprestasi)</li>
              <li>Instruksi diberikan satu arah (ceramah/lecturing)</li>
              <li>Guru memberikan tugas yang sama untuk siswa</li>
              <li>Guru menggunakan penilaian sumatif untuk menilai hasil belajar siswa</li>
            </ul>
          </div>
          <div className="column">
            <h2>Difrensiasi Belajar</h2>
            <ol>
              <li>Instruksi bersifat student centered</li>
              <li>Instruksi diberikan dalam kelompok kecil</li>
              <li>Instruksi diberikan dengan cara yang beragam (lecturing, hands-on, visual representations)</li>
              <li>Instruksi diberikan dengan cara yang beragam (lecturing, hands-on, visual representations)</li>
              <li>Guru memberikan beberapa pilihan tugas untuk siswa</li>
              <li>Selain menggunakan penilaian sumatif, guru menggunakan penilaian formatif untuk menyesuaikan instruksi pembelajarannya kepada siswa</li>
            </ol>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h2>MONTESSORI</h2>
          <p>
            Salah satu pendekatan dalam pendidikan yang filosofinya didasarkan pada rasa hormat pada keunikan setiap anak. Setiap anak diberi kebebasan dalam belajar tanpa batas-batasan. Penddekatan ini tidak membandingkan seorang anak
            dengan standar pengukuran yang biasa diterapkan pada sistem pendidikan konvensional. Tujuan utama pendekatan Montessori adalah memberikan lingkungan yang memberikan stimulasi anak untuk bereksplorasi dan belajar tanpa tekanan.
            Hasil akhir yang diharapkan adalah terbentuknya kesenangan akan belajar dalam diri anak. Pendekatan Montessori memiliki 5 area pembelajaran yang akan dieksplorasi anak, yaitu: Pratical Life, Sendorial, Mathematics, Language dan
            Cultural.
          </p>
          <p className="my-3 ">Perbedaan kelas yang menerapkan Difrensiasi Belajar dan Montessori</p>
        </div>
        <div className="container">
          <div className="column">
            <h2>KonvensionalL</h2>
            <ul>
              <li>Guru memiliki peran aktif, sehingga peran anak dalam belajar cenderung pasif.</li>
              <li>Disiplin ditetapkan dan ditekankan oleh guru</li>
              <li>Instruksi sesuai dengan gaya mengajar guru.</li>
              <li>Pembelajaran disusun sama untuk semua anak.</li>
              <li>Anak duduk dibangku dan diharuskan untuk tetap duduk selama pelajaran.</li>
              <li>Guru memberitahu apa kesalahan anak</li>
            </ul>
          </div>
          <div className="column">
            <h2>Montessori</h2>
            <ol>
              <li>Guru berperan sebagai fasilitator dalam belajar</li>
              <li>Pembelajaran dirancang agar membangkitkan disiplin diri pada Anak</li>
              <li>Instruksi dalam pembelajaran diadaptasi sesuai dengan gaya belajar siswa</li>
              <li>Pembelajaran direncanakan berdasarkan minat dan kemampuannya.</li>
              <li>Anak diizinkan untuk berjalan dan berbicara dengan temannya jika dibutuhkan dengan tidak mengganggu teman lain yang sedang bekerja.</li>
              <li>Materi/alat Montessori dirancang agar anak dapat mengetahui sendiri kesalahannya</li>
            </ol>
          </div>
        </div>
        <div>
          <h2>MULTIPLE INTELLIGENCES</h2>
          <p>Kecerdasan Majemuk yang dikemukakan oleh Horward Gardner adalah teori yang mengatakan bahwa semua orang memiliki kecerdasan yang berbeda-beda.</p>
        </div>
      </div>
    </div>
  );
};

export default Kurikulum;
