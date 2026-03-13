import { client } from "../lib/client";
import HeroSection from "../src/components/HeroSection";
import Link from "next/link";
import GuruSection from "../src/components/GuruSection";
import PPDBSection from "../src/components/PPDBSection";
import Footer from "../src/components/Footer";
import FloatingWA from "../src/components/FloatingWA";

export default async function Home() {
  // AMBIL DATA DARI SANITY
  // order(_createdAt desc) = Berita terbaru muncul pertama
  const daftarBerita = await client.fetch('*[_type == "berita"] | order(_createdAt desc)');
  // order(nama asc) = Urutan guru berdasarkan abjad nama
  const daftarGuru = await client.fetch('*[_type == "guru"] | order(nama asc)');

  return (
    // scroll-smooth membuat navigasi meluncur halus saat diklik
    <main className="min-h-screen bg-slate-50 font-sans scroll-smooth">
      
      {/* 1. NAVBAR (Navigasi Atas) */}
      <nav className="w-full bg-blue-600 text-white py-4 px-8 shadow-md flex justify-between items-center z-100 sticky top-0">
        <div className="text-2xl font-extrabold tracking-wider">
          <Link href="/">SMP MUHAMMADIYAH</Link>
        </div>
        <ul className="hidden md:flex space-x-8 font-medium">
          <li><Link href="/" className="hover:text-yellow-300 transition">Beranda</Link></li>
          <li><Link href="/profile" className="hover:text-yellow-300 transition">Profil</Link></li>
          <li><Link href="#fasilitas" className="hover:text-yellow-300 transition">Fasilitas</Link></li>
          <li><Link href="#berita" className="hover:text-yellow-300 transition">Berita</Link></li>
        </ul>
      </nav>

      {/* 2. HERO SECTION (Sambutan Visual) */}
      <HeroSection />

      {/* 3. PPDB SECTION (Informasi Biaya & Cara Daftar) */}
      <PPDBSection />

      {/* 4. GURU SECTION (Daftar Tenaga Pendidik) */}
      <GuruSection daftarGuru={daftarGuru} />

      {/* 5. FASILITAS SECTION (Gunakan ID "fasilitas" agar menu di atas berfungsi) */}
      <section id="fasilitas" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-8 text-center">
            <h2 className="text-4xl font-extrabold text-slate-800 mb-4">Fasilitas Sekolah</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-12"></div>
            
            {/* Grid Contoh Fasilitas */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="h-64 bg-slate-100 rounded-3xl flex items-center justify-center text-slate-400 font-bold italic border-2 border-dashed border-slate-200">
                Lab Komputer Modern
              </div>
              <div className="h-64 bg-slate-100 rounded-3xl flex items-center justify-center text-slate-400 font-bold italic border-2 border-dashed border-slate-200">
                Perpustakaan Digital
              </div>
              <div className="h-64 bg-slate-100 rounded-3xl flex items-center justify-center text-slate-400 font-bold italic border-2 border-dashed border-slate-200">
                Lapangan Serbaguna
              </div>
            </div>
            <p className="mt-8 text-slate-500 text-sm">*Foto fasilitas dapat Anda tambahkan melalui Admin Sanity nanti.</p>
        </div>
      </section>

      {/* 6. BERITA SECTION (Gunakan ID "berita" agar menu di atas berfungsi) */}
      <section id="berita" className="py-24 px-8 max-w-6xl mx-auto flex flex-col items-center">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-800 mb-4">Berita & Pengumuman</h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 italic">Ikuti terus perkembangan kegiatan sekolah kami</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 w-full">
          {daftarBerita.length > 0 ? (
            daftarBerita.map((berita: any, index: number) => (
              <Link 
                key={index} 
                href={`/berita/${berita.slug?.current}`} 
                className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all border border-slate-100 flex flex-col justify-between items-start text-left"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Update</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-6 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                    {berita.judul}
                  </h3>
                </div>
                <span className="text-blue-600 font-bold text-sm flex items-center">
                  Baca selengkapnya 
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            ))
          ) : (
            <div className="text-center col-span-3 py-10 text-slate-400 italic">Belum ada berita.</div>
          )}
        </div>
      </section>

      {/* 7. FOOTER & TOMBOL WA */}
      <Footer />
      <FloatingWA />

    </main>
  );
}