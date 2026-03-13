"use client";
import { motion } from "framer-motion";
import { urlFor } from "../../lib/client"; // 1. IMPORT FUNGSI NYA DI SINI

export default function GuruSection({ daftarGuru }: { daftarGuru: any[] }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-800 mb-4">Tenaga Pendidik</h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500">Guru-guru profesional penggerak masa depan</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {daftarGuru.map((guru: any, index: number) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full shadow-xl border-4 border-white ring-1 ring-slate-100">
                {/* 2. PAKAI URLFOR UNTUK FOTO */}
                {guru.foto ? (
                  <img 
                    src={urlFor(guru.foto).url()} 
                    alt={guru.nama}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="bg-slate-200 w-full h-full flex items-center justify-center text-slate-400">
                    📷
                  </div>
                )}
              </div>
              <h3 className="font-bold text-slate-800 text-xl">{guru.nama}</h3>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mt-1">{guru.jabatan}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}