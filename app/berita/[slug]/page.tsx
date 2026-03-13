import { client, urlFor } from "@/lib/client";
import Link from "next/link";
import Footer from "@/src/components/Footer";

export default async function DetailBerita({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // QUERY UNTUK MENGAMBIL BERITA BERDASARKAN SLUG
  const query = `*[_type == "berita" && slug.current == $slug][0]`;
  const berita = await client.fetch(query, { slug });

  // JIKA BERITA TIDAK ADA
  if (!berita) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col p-10">
        <h1 className="text-2xl font-bold text-slate-800">Maaf, Berita tidak ditemukan.</h1>
        <Link href="/" className="mt-4 text-blue-600 font-bold">← Kembali ke Beranda</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* NAVBAR MINIMALIS */}
      <nav className="bg-blue-600 p-4 text-white shadow-md">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-bold text-lg">SMP MUHAMMADIYAH</Link>
          <Link href="/" className="text-sm border border-white/30 px-4 py-1 rounded-full hover:bg-white hover:text-blue-600 transition">Beranda</Link>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto py-16 px-6">
        <span className="bg-blue-100 text-blue-700 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest">Update Sekolah</span>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-6 leading-tight">
          {berita.judul}
        </h1>
        
        <div className="flex items-center mt-6 text-slate-400 text-sm italic">
          <span>Diterbitkan pada: {new Date(berita._createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
        </div>

        {/* GAMBAR UTAMA */}
        {berita.gambarUtama && (
          <div className="my-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50">
            <img 
              src={urlFor(berita.gambarUtama).url()} 
              alt={berita.judul} 
              className="w-full h-auto" 
            />
          </div>
        )}

        {/* ISI BERITA (TEXT) */}
        <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-6">
          {/* Karena kita pakai PortableText sederhana, kita tampilkan isi berita di sini */}
          {typeof berita.isi === 'string' ? (
             <p>{berita.isi}</p>
          ) : (
             <p className="whitespace-pre-line text-lg font-medium">
               {/* Ini untuk menangani teks sederhana dari Sanity */}
               {berita.isi?.map((block: any) => block.children?.map((child: any) => child.text).join('')).join('\n')}
             </p>
          )}
        </div>

        <div className="mt-20 border-t pt-10">
            <Link href="/" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition">
              ← Kembali Baca Berita Lain
            </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}