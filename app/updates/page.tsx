import { client, queries } from "@/lib/sanity"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
export const dynamic = 'force-dynamic';
export const revalidate = 0;
async function getUpdates() {
  return await client.fetch(queries.updates)
}

export default async function UpdatesPage() {
  const updates = await getUpdates()

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Updates & Announcements</h1>
          <p className="text-lg text-gray-600">Stay informed with our latest news and updates</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {updates.map((update: any) => (
            <Card key={update._id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="line-clamp-2 flex-1">{update.title}</CardTitle>
                  {update.featured && (
                    <Badge variant="secondary" className="ml-2">
                      Featured
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-gray-500">
                  {new Date(update.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </CardHeader>
              <CardContent>
                {update.excerpt && <p className="text-gray-600 mb-4 line-clamp-3">{update.excerpt}</p>}
                <Button asChild variant="outline" size="sm">
                  <Link href={`/updates/${update.slug.current}`}>Read More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {updates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No updates available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  )
}
