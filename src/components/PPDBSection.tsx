"use client";

export default function PPDBSection() {
  const alurDaftar = [
    "Isi formulir online di website ini",
    "Upload berkas (KK, Akta, Ijazah)",
    "Tes Observasi & Wawancara",
    "Pengumuman kelulusan & Daftar Ulang"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-800 mb-4">Informasi PPDB 2026/2027</h2>
          <p className="text-slate-500">Semua informasi pendaftaran dalam satu pintu</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Bagian Kiri: Rincian Biaya */}
          <div className="bg-blue-600 p-10 rounded-[40px] text-white shadow-2xl shadow-blue-200">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <span className="bg-white text-blue-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">💰</span>
              Estimasi Biaya
            </h3>
            <div className="space-y-6">
              <div className="flex justify-between border-b border-blue-400 pb-4">
                <span className="font-medium opacity-90 text-lg">Gelombang 1</span>
                <span className="font-black text-xl">Rp 2.500.000</span>
              </div>
              <div className="flex justify-between border-b border-blue-400 pb-4 text-yellow-300">
                <span className="font-medium text-lg italic">Gelombang 2 (Skg)</span>
                <span className="font-black text-xl">Rp 3.000.000</span>
              </div>
              <div className="flex justify-between opacity-60 pb-4">
                <span className="font-medium text-lg">Gelombang 3</span>
                <span className="font-black text-xl">Rp 3.500.000</span>
              </div>
              <p className="text-xs italic opacity-70 mt-4">*Biaya sudah termasuk seragam, buku, dan uang gedung.</p>
            </div>
          </div>

          {/* Bagian Kanan: Alur Pendaftaran */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
              <span className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">📝</span>
              Alur Pendaftaran
            </h3>
            <div className="space-y-8 relative">
              {/* Garis vertikal dekorasi */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-slate-100 -z-10"></div>
              
              {alurDaftar.map((step, i) => (
                <div key={i} className="flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-slate-50 border-2 border-slate-100 flex items-center justify-center font-bold text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all mr-6">
                    {i + 1}
                  </div>
                  <p className="text-lg font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}