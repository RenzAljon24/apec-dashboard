import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: false,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// GROQ queries
export const queries = {
  updates: `*[_type == "update"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    featured
  }`,

  featuredUpdates: `*[_type == "update" && featured == true] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt
  }`,

  updateBySlug: `*[_type == "update" && slug.current == $slug][0] {
    _id,
    title,
    content,
    publishedAt
  }`,

  commissioners: `*[_type == "commissioner"] | order(order asc) {
    _id,
    name,
    position,
    bio,
    image,
    email,
    phone
  }`,

  laws: `*[_type == "law"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    category,
    "pdfUrl": pdfFile.asset->url,
    publishedAt
  }`,

  lawsByCategory: `*[_type == "law" && category == $category] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    "pdfUrl": pdfFile.asset->url,
    publishedAt
  }`,

  contact: `*[_type == "contact"][0] {
    _id,
    address,
    phone,
    email,
    officeHours,
    socialMedia
  }`,
}
