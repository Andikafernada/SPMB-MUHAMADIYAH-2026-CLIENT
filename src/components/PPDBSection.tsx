import Link from "next/link";

export default function PPDBSection({ dataPPDB }: { dataPPDB: any }) {
  const linkWhatsApp = `https://wa.me/${dataPPDB?.nomorWhatsApp || '628'}?text=Halo%20Admin%20PPDB...`;

  return (
    <section id="ppdb" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-800">Informasi PPDB {dataPPDB?.tahunAjaran}</h2>
          <p className="text-slate-500 mt-4 text-lg">{dataPPDB?.tagline}</p>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* SEKSI BIAYA */}
          <div className="bg-blue-600 rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden">
            <h3 className="text-3xl font-black mb-10 flex items-center gap-4">
              <span className="bg-white p-2 rounded-xl">💰</span> Estimasi Biaya
            </h3>
            <div className="space-y-5">
              {dataPPDB?.gelombangBiaya?.map((item: any, i: number) => (
                <div key={i} className={`flex justify-between items-center border-b border-white/20 pb-4 ${item.isSekarang ? 'bg-white/10 p-4 rounded-2xl border-none' : ''}`}>
                  <span className={`text-lg ${item.isSekarang ? 'font-bold text-yellow-300' : 'opacity-90'}`}>
                    {item.nama} {item.isSekarang && '(Skg)'}
                  </span>
                  <span className={`text-xl ${item.isSekarang ? 'font-black text-yellow-300 text-2xl' : 'font-bold'}`}>
                    Rp {item.biaya}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-10 text-sm text-blue-100 italic">*Biaya sudah termasuk seragam, buku, dan uang gedung.</p>
          </div>

          {/* SEKSI ALUR */}
          <div className="bg-white rounded-[40px] p-10 shadow-sm border border-slate-100">
            <h3 className="text-3xl font-black text-slate-800 mb-10 flex items-center gap-4">
              <span className="bg-blue-100 p-2 rounded-xl">📝</span> Alur Pendaftaran
            </h3>
            <div className="space-y-8 relative">
              {dataPPDB?.alurPendaftaran?.map((langkah: string, i: number) => (
                <div key={i} className="flex gap-6 relative z-10">
                  <div className="bg-blue-600 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold shrink-0 shadow-lg">{i + 1}</div>
                  <p className="text-slate-700 font-medium pt-1">{langkah}</p>
                </div>
              ))}
            </div>
            <Link href={linkWhatsApp} target="_blank" className="block text-center bg-blue-600 text-white py-5 rounded-2xl font-black text-xl mt-12 hover:bg-blue-700 transition-all">
              DAFTAR SEKARANG 🚀
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}