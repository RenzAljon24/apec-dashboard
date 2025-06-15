import { client, queries } from "@/lib/sanity"
import { PortableText } from "@portabletext/react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
export const dynamic = 'force-dynamic';
export const revalidate = 0;
async function getUpdate(slug: string) {
  return await client.fetch(queries.updateBySlug, { slug })
}

export default async function UpdatePage({ params }: { params: { slug: string } }) {
  const update = await getUpdate(params.slug)

  if (!update) {
    notFound()
  }

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/updates">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Updates
          </Link>
        </Button>

        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{update.title}</h1>
            <p className="text-gray-600">
              Published on{" "}
              {new Date(update.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <PortableText value={update.content} />
          </div>
        </article>
      </div>
    </div>
  )
}
