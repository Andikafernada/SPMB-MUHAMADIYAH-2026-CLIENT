import { client } from "../../../lib/client";
import { PortableText } from "@portabletext/react";

export default async function DetailBerita({ params }: { params: { slug: string } }) {
  const { slug } = await params; // Ambil alamat slug dari URL
  const berita = await client.fetch(`*[_type == "berita" && slug.current == $slug][0]`, { slug });

  if (!berita) {
    return <div className="text-center py-20">Berita tidak ditemukan.</div>;
  }

  return (
    <main className="min-h-screen bg-white pb-20 font-sans">
      <nav className="bg-blue-600 p-4 text-white shadow-lg">
        <div className="max-w-4xl mx-auto font-bold text-xl uppercase">SMP MUHAMMADIYAH</div>
      </nav>

      <article className="max-w-3xl mx-auto mt-12 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 leading-tight">
          {berita.judul}
        </h1>
        
        <div className="flex items-center text-slate-500 mb-8 border-b pb-8">
          <span>{new Date(berita._createdAt).toLocaleDateString('id-ID', { dateStyle: 'long' })}</span>
        </div>

        {/* Isi Berita Utama */}
        <div className="prose prose-blue max-w-none text-slate-700 leading-relaxed text-lg">
          <PortableText value={berita.isi} />
        </div>
        
        <div className="mt-12 border-t pt-6">
            <a href="/" className="text-blue-600 font-bold hover:text-blue-800">← Kembali ke Beranda</a>
        </div>
      </article>
    </main>
  );
}