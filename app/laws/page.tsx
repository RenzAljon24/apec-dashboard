import { client, queries } from "@/lib/sanity"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Download } from "lucide-react"

async function getLaws() {
  return await client.fetch(queries.laws)
}

const categoryColors = {
  election: "bg-blue-100 text-blue-800",
  commission: "bg-green-100 text-green-800",
  university: "bg-purple-100 text-purple-800",
  guidelines: "bg-orange-100 text-orange-800",
}

const categoryLabels = {
  election: "Election Laws",
  commission: "Commission Rules",
  university: "University Policies",
  guidelines: "General Guidelines",
}

export default async function LawsPage() {
  const laws = await getLaws()

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Constitutions and Bylaws of University Organizations</h1>
          <p className="text-lg text-gray-600">Access important documents and legal frameworks</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {laws.map((law: any) => (
            <Card key={law._id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="line-clamp-2 flex-1">{law.title}</CardTitle>
                  <FileText className="h-6 w-6 text-gray-400 ml-2 flex-shrink-0" />
                </div>
                <div className="flex items-center justify-between">
                  <Badge className={categoryColors[law.category as keyof typeof categoryColors]}>
                    {categoryLabels[law.category as keyof typeof categoryLabels]}
                  </Badge>
                  <p className="text-sm text-gray-500">{new Date(law.publishedAt).toLocaleDateString()}</p>
                </div>
              </CardHeader>
              <CardContent>
                {law.description && <p className="text-gray-600 mb-4 line-clamp-3">{law.description}</p>}
                <div className="flex gap-2">
                  <Button asChild size="sm">
                    <a href={law.pdfUrl} target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {laws.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No documents available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  )
}
