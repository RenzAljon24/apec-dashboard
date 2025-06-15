import { client, queries, urlFor } from "@/lib/sanity"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PortableText } from "@portabletext/react"
import { Mail, Phone } from "lucide-react"
export const dynamic = 'force-dynamic';
export const revalidate = 0;
async function getCommissioners() {
  return await client.fetch(queries.commissioners)
}

export default async function CommissionersPage() {
  const commissioners = await getCommissioners()

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Commissioners</h1>
          <p className="text-lg text-gray-600">Meet the dedicated individuals leading our commission</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {commissioners.map((commissioner: any) => (
            <Card key={commissioner._id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                {commissioner.image && (
                  <div className="mx-auto mb-4">
                    <Image
                      src={urlFor(commissioner.image).width(200).height(200).url() || "/placeholder.svg"}
                      alt={commissioner.name}
                      width={200}
                      height={200}
                      className="rounded-full object-cover"
                    />
                  </div>
                )}
                <CardTitle className="text-xl">{commissioner.name}</CardTitle>
                <p className="text-green-600 font-semibold">{commissioner.position}</p>
              </CardHeader>
              <CardContent>
                {commissioner.bio && (
                  <div className="prose prose-sm mb-4">
                    <PortableText value={commissioner.bio} />
                  </div>
                )}
                <div className="space-y-2">
                  {commissioner.email && (
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="h-4 w-4 mr-2" />
                      <a href={`mailto:${commissioner.email}`} className="hover:text-green-600">
                        {commissioner.email}
                      </a>
                    </div>
                  )}
                  {commissioner.phone && (
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="h-4 w-4 mr-2" />
                      <a href={`tel:${commissioner.phone}`} className="hover:text-green-600">
                        {commissioner.phone}
                      </a>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {commissioners.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No commissioners information available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  )
}
