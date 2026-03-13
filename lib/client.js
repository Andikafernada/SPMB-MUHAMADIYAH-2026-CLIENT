import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'; // Tambahkan ini

export const client = createClient({
  projectId: "hk09q6d0",
dataset: "production",
  apiVersion: "2026-03-13", 
  useCdn: false,
});

// Tambahkan fungsi sakti ini di paling bawah
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);