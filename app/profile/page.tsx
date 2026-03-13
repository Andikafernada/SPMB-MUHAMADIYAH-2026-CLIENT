"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProfilPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Navbar Minimalis */}
      <nav className="bg-blue-600 p-4 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
          <Link href="/" className="font-bold text-xl uppercase tracking-tighter">
            SMP <span className="text-yellow-300">MUHAMMADIYAH</span>
          </Link>
          <Link href="/" className="text-sm font-semibold hover:text-yellow-300 transition-colors">
            ← Kembali ke Beranda
          </Link>
        </div>
      </nav>

      {/* Hero Profil - Foto Gedung */}
      <section className="relative h-80 bg-slate-800 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           {/* Ganti src ini dengan foto gedung sekolah yang asli nanti */}
           <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070" 
            className="w-full h-full object-cover" 
            alt="Gedung Sekolah"
           />
        </div>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative text-white text-5xl font-black tracking-tight"
        >
          Profil Sekolah
        </motion.h1>
      </section>

      {/* Konten Utama */}
      <section className="max-w-4xl mx-auto py-20 px-8">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Sisi Kiri: Visi */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-blue-50 p-10 rounded-3xl"
          >
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Visi Sekolah</h2>
            <p className="text-xl text-slate-700 leading-relaxed italic font-medium">
              "Menjadi lembaga pendidikan unggulan yang mencetak generasi rabbani, cerdas intelektual, dan mandiri."
            </p>
          </motion.div>

          {/* Sisi Kanan: Misi */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Misi Kami</h2>
            <ul className="space-y-4">
              {[
                "Menyelenggarakan pendidikan berbasis Al-Qur'an dan Sunnah.",
                "Mengembangkan bakat dan minat siswa di bidang teknologi & seni.",
                "Membudayakan lingkungan sekolah yang bersih, religius, dan disiplin.",
                "Menjalin kerjasama harmonis dengan orang tua dan masyarakat."
              ].map((misi, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">✓</span>
                  <span className="text-slate-600 font-medium">{misi}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Sambutan Kepala Sekolah */}
        <div className="mt-24 border-t pt-20 flex flex-col md:flex-row items-center gap-12">
          <div className="w-48 h-48 bg-slate-200 rounded-2xl shrink-0 overflow-hidden shadow-xl">
             {/* Foto Kepala Sekolah */}
             <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Sambutan Kepala Sekolah</h3>
            <p className="text-slate-600 leading-relaxed text-lg italic">
              "Selamat datang di SMP Muhammadiyah. Kami percaya setiap anak memiliki potensi emas. Melalui kurikulum yang terintegrasi dengan nilai-nilai Islam, kami siap membimbing putra-putri Anda menjadi pemimpin masa depan."
            </p>
            <p className="mt-6 font-bold text-slate-800 text-lg">H. Ahmad Fauzi, M.Pd.</p>
          </div>
        </div>
      </section>

      {/* Footer Minimalis di Halaman Profil */}
      <footer className="bg-slate-50 py-10 text-center border-t border-slate-200">
          <p className="text-slate-400 text-sm italic">© 2026 SMP Muhammadiyah - Built by Andika Fernanda</p>
      </footer>
    </main>
  );
}