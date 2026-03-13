// Kalau filenya tetap .js, hapus ": any" nya
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "hk09q6d0",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false, // Biar real-time
});

const builder = imageUrlBuilder(client);

export function urlFor(source) { // Hapus ": any" di sini
  return builder.image(source);
}