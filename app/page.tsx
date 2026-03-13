import { client } from "../lib/client";
import HeroSection from "../src/components/HeroSection";
import Link from "next/link";
import GuruSection from "../src/components/GuruSection";
import PPDBSection from "../src/components/PPDBSection";
import Footer from "../src/components/Footer";
import FloatingWA from "../src/components/FloatingWA";
import { urlFor } from "../lib/client"; // Pastikan fungsi urlFor sudah ada untuk gambar

export default async function Home() {
  // AMBIL DATA ASLI DARI SANITY
  const daftarBerita = await client.fetch('*[_type == "berita"] | order(_createdAt desc)');
  const daftarGuru = await client.fetch('*[_type == "guru"] | order(nama asc)');
  const daftarFasilitas = await client.fetch('*[_type == "fasilitas"]');

  return (
    <main className="min-h-screen bg-slate-50 font-sans scroll-smooth">
      
      {/* NAVBAR */}
      <nav className="w-full bg-blue-600 text-white py-4 px-8 shadow-md flex justify-between items-center z-50 sticky top-0">
        <div className="text-2xl font-extrabold tracking-wider">
          <Link href="/">SMP MUHAMMADIYAH</Link>
        </div>
        <ul className="hidden md:flex space-x-8 font-medium">
          <li><Link href="/" className="hover:text-yellow-300 transition">Beranda</Link></li>
          <li><Link href="/profil" className="hover:text-yellow-300 transition">Profil</Link></li>
          <li><Link href="#fasilitas" className="hover:text-yellow-300 transition">Fasilitas</Link></li>
          <li><Link href="#berita" className="hover:text-yellow-300 transition">Berita</Link></li>
        </ul>
      </nav>

      <HeroSection />
      <PPDBSection />
      <GuruSection daftarGuru={daftarGuru} />

      {/* FASILITAS SECTION (DATA ASLI) */}
      <section id="fasilitas" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
            <h2 className="text-4xl font-extrabold text-slate-800 text-center mb-4">Fasilitas Sekolah</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-12"></div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {daftarFasilitas?.map((fs: any, i: number) => (
                <div key={i} className="group overflow-hidden rounded-3xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                  <div className="h-52 overflow-hidden">
                    {fs.gambar && (
                      <img 
                        src={urlFor(fs.gambar).url()} 
                        alt={fs.nama} 
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-slate-800">{fs.nama}</h3>
                    <p className="text-slate-500 text-sm mt-2">{fs.deskripsi}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* BERITA SECTION (DATA ASLI) */}
      <section id="berita" className="py-24 px-8 max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-extrabold text-slate-800 mb-4">Berita & Pengumuman</h2>
        <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-16"></div>

        <div className="grid md:grid-cols-3 gap-8 w-full">
          {daftarBerita.map((berita: any, index: number) => (
            <Link 
              key={index} 
              href={`/berita/${berita.slug?.current}`} 
              className="group bg-white p-6 rounded-3xl shadow-sm hover:shadow-2xl transition-all border border-slate-100"
            >
              {berita.gambarUtama && (
                <div className="h-44 w-full rounded-2xl overflow-hidden mb-4">
                  <img src={urlFor(berita.gambarUtama).url()} className="w-full h-full object-cover" />
                </div>
              )}
              <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                {berita.judul}
              </h3>
              <p className="text-blue-600 font-bold text-sm mt-4 italic">Baca selengkapnya →</p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
      <FloatingWA />
    </main>
  );
}