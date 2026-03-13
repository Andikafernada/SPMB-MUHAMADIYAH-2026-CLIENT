export default function Footer({ dataSetelan }: { dataSetelan: any }) {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 px-8 mt-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        
        {/* KOLOM 1: TENTANG */}
        <div>
          <h3 className="text-white text-xl font-bold mb-6">SMP Muhammadiyah</h3>
          <p className="text-sm leading-relaxed opacity-70">
            Mewujudkan generasi yang berakhlak mulia, cerdas, dan mandiri berlandaskan nilai-nilai keislaman.
          </p>
        </div>

        {/* KOLOM 2: KONTAK (DINAMIS) */}
        <div>
          <h3 className="text-white text-xl font-bold mb-6">Hubungi Kami</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <span>📍</span> 
              <span>{dataSetelan?.alamat || "Alamat belum diatur"}</span>
            </li>
            <li className="flex gap-3">
              <span>📞</span> 
              <span>{dataSetelan?.telepon || "0812..."}</span>
            </li>
            <li className="flex gap-3">
              <span>✉️</span> 
              <span>{dataSetelan?.email || "info@sekolah.sch.id"}</span>
            </li>
          </ul>
        </div>

        {/* KOLOM 3: SOSIAL MEDIA */}
        <div>
          <h3 className="text-white text-xl font-bold mb-6">Media Sosial</h3>
          <div className="flex gap-4">
            {dataSetelan?.instagram && (
              <a href={`https://instagram.com/${dataSetelan.instagram}`} className="bg-slate-800 p-3 rounded-xl hover:bg-blue-600 transition">IG</a>
            )}
            {dataSetelan?.facebook && (
              <a href={`https://facebook.com/${dataSetelan.facebook}`} className="bg-slate-800 p-3 rounded-xl hover:bg-blue-600 transition">FB</a>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-slate-800 mt-12 pt-8 text-center text-xs opacity-50 uppercase tracking-widest">
        {dataSetelan?.copyright || "© 2026 SMP MUHAMMADIYAH"}
      </div>
    </footer>
  );
}