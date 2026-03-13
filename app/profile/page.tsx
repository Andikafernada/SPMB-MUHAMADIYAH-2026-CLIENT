import { client, urlFor } from "@/lib/client";
import Footer from "@/src/components/Footer";
import Link from "next/link";

export default async function ProfilePage() {
  // AMBIL DATA PROFIL & DATA SETELAN FOOTER
  const data = await client.fetch('*[_type == "profile"][0]');
  const dataSetelan = await client.fetch('*[_type == "setelan"][0]');

  if (!data) return (
    <div className="min-h-screen flex items-center justify-center font-sans">
        <p className="text-slate-400 italic">Data profil sedang disiapkan oleh Admin...</p>
    </div>
  );

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* NAVBAR */}
      <nav className="bg-blue-600 p-6 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-black text-2xl tracking-tighter">SMP MUHAMMADIYAH</Link>
          <Link href="/" className="bg-white/20 px-5 py-2 rounded-full text-sm font-bold hover:bg-white/40 transition">Kembali</Link>
        </div>
      </nav>

      {/* HEADER PROFIL */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Tentang Kami</span>
          <h1 className="text-5xl font-black text-slate-900 mt-4 mb-8">Profil Sekolah</h1>
          <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* VISI & MISI */}
      <section className="py-24 max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-start">
        <div className="bg-blue-600 p-12 rounded-[40px] text-white shadow-2xl shadow-blue-200 relative overflow-hidden">
          <h2 className="text-3xl font-black mb-8 flex items-center gap-3 italic">
             <span className="text-4xl not-italic">🎯</span> Visi Kami
          </h2>
          <p className="text-2xl font-medium leading-relaxed italic opacity-95">
            "{data.visi}"
          </p>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
        </div>

        <div>
          <h2 className="text-3xl font-black text-slate-800 mb-8 flex items-center gap-3">
             <span className="bg-blue-100 p-2 rounded-xl text-2xl">📝</span> Misi Kami
          </h2>
          <ul className="space-y-6">
            {data.misi?.map((m: string, i: number) => (
              <li key={i} className="flex gap-4 items-start text-slate-700 text-lg group">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex shrink-0 items-center justify-center text-sm font-bold shadow-md group-hover:scale-110 transition">
                    {i+1}
                </span>
                <span className="pt-0.5 leading-relaxed">{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SAMBUTAN KEPALA SEKOLAH (Fix text-center conflict) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-8 flex flex-col md:flex-row gap-16 items-center">
          {data.fotoKepalaSekolah && (
            <div className="w-72 h-72 shrink-0 rounded-[50px] overflow-hidden shadow-2xl border-8 border-white -rotate-3 hover:rotate-0 transition duration-500">
              <img 
                src={urlFor(data.fotoKepalaSekolah).url()} 
                alt="Kepala Sekolah"
                className="w-full h-full object-cover" 
              />
            </div>
          )}
          <div className="text-center md:text-left"> {/* Di sini perbaikan text-center nya Pak */}
            <h2 className="text-4xl font-black text-slate-800 mb-6">Sambutan Kepala Sekolah</h2>
            <div className="w-16 h-1.5 bg-blue-600 mb-8 mx-auto md:mx-0 rounded-full"></div>
            <p className="text-xl text-slate-600 leading-relaxed italic opacity-80">
              "{data.sambutan}"
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER DINAMIS */}
      <Footer dataSetelan={dataSetelan} />
    </main>
  );
}