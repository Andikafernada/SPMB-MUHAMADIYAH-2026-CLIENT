"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32 px-4 relative overflow-hidden">
      
      {/* Efek Latar Belakang */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: "2s" }}></div>

      {/* Teks Animasi */}
      <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-extrabold text-slate-800 mb-6 leading-tight relative z-10"
      >
        Cerdas, Islami, dan <br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">
  Berteknologi Tinggi
</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 relative z-10"
      >
        Selamat datang di portal resmi SMP Muhammadiyah. Kami berkomitmen mencetak generasi penerus bangsa yang unggul dalam akhlak dan sains.
      </motion.p>

      {/* Tombol Animasi */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex space-x-4 relative z-10"
      >
        <button className="px-8 py-3 bg-linear-to-r from-blue-600 to-blue-700 text-white ...">
  Jelajahi Sekolah
</button>
        <button className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600/20 rounded-full font-bold hover:border-blue-600 hover:scale-105 transition-all">
          Pendaftaran (PPDB)
        </button>
      </motion.div>
    </section>
  );
}