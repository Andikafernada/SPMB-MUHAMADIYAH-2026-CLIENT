"use client";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        
        {/* Kolom 1: Identitas */}
        <div>
          <h3 className="text-2xl font-black tracking-tighter mb-6">
            SMP <span className="text-blue-500">MUHAMMADIYAH</span>
          </h3>
          <p className="text-slate-400 leading-relaxed mb-6">
            Membentuk generasi unggul yang cerdas secara intelektual dan kokoh dalam aqidah Islamiyah.
          </p>
          <div className="flex space-x-4">
            {/* Ikon Sosial Media Sederhana */}
            <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">IG</div>
            <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">FB</div>
            <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">YT</div>
          </div>
        </div>

        {/* Kolom 2: Kontak & Alamat */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-slate-700 pb-2">Hubungi Kami</h4>
          <ul className="space-y-4 text-slate-400">
            <li className="flex items-start">
              <span className="mr-3 text-blue-500">📍</span>
              Jl. Raya Pendidikan No. 123, Kota Bandung, Jawa Barat
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-blue-500">📞</span>
              (022) 1234567
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-blue-500">✉️</span>
              info@smpmuhammadiyah.sch.id
            </li>
          </ul>
        </div>

        {/* Kolom 3: Google Maps (Embed) */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-slate-700 pb-2">Lokasi Sekolah</h4>
          <div className="w-full h-48 rounded-xl overflow-hidden grayscale invert opacity-80 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-500">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.06456073167!2d107.6191!3d-6.9175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTUnMDMuMCJTIDEwN8KwMzcnMDguOCJF!5e0!3m2!1sid!2sid!4v1620000000000!5m2!1sid!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>© 2026 SMP Muhammadiyah. Built by <span className="text-white font-medium">Andika Fernanda</span></p>
      </div>
    </footer>
  );
}