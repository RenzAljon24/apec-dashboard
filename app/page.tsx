import { client, queries } from "@/lib/sanity"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, FileText, Phone, ArrowRight, Shield, Award, CheckCircle } from "lucide-react"

async function getFeaturedUpdates() {
  return await client.fetch(queries.featuredUpdates)
}

export default async function HomePage() {
  const featuredUpdates = await getFeaturedUpdates()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-green-800 to-green-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <Image
                src="/images/apec-logo.png"
                alt="PHINMA UPang APEC Logo"
                width={120}
                height={120}
                className="mx-auto object-contain"
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">PHINMA UPang APEC</h1>

            <p className="text-xl md:text-2xl mb-4 text-gray-100 font-medium">
              Appointments, Performance Evaluation, and Electoral Commission
            </p>

            <p className="text-lg mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              An independent body ensuring fair, transparent, and democratic electoral processes for PHINMA University
              of Pangasinan General Elections.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-green-800 hover:bg-gray-100 shadow-lg transition-all duration-300"
              >
                <Link href="/updates" className="flex items-center">
                  Latest Updates
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-green-700 hover:bg-white hover:text-green-800 transition-all duration-300"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive electoral services ensuring transparency and integrity in university elections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Calendar,
                title: "Latest Updates",
                description: "Stay informed with official announcements and electoral news",
                href: "/updates",
                color: "bg-blue-600",
              },
              {
                icon: Users,
                title: "Our Commissioners",
                description: "Meet the dedicated officials ensuring electoral integrity",
                href: "/commissioners",
                color: "bg-green-600",
              },
              {
                icon: FileText,
                title: "Laws & Regulations",
                description: "Access official documents and legal frameworks",
                href: "/laws",
                color: "bg-gray-600",
              },
              {
                icon: Phone,
                title: "Contact Us",
                description: "Get in touch with our office for official inquiries",
                href: "/contact",
                color: "bg-blue-800",
              },
            ].map((item) => (
              <Card
                key={item.title}
                className="group hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-lg ${item.color} flex items-center justify-center shadow-md`}
                  >
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                  <Button
                    asChild
                    variant="outline"
                    className="hover:bg-green-50 hover:border-green-200 transition-all duration-300"
                  >
                    <Link href={item.href} className="flex items-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                To ensure fair, transparent, and credible electoral processes that uphold democratic principles within
                PHINMA University of Pangasinan, fostering trust and integrity in student governance.
              </p>
              <div className="space-y-4">
                {[
                  "Transparent Electoral Processes",
                  "Fair and Impartial Oversight",
                  "Democratic Governance Support",
                  "Student Rights Protection",
                ].map((item) => (
                  <div key={item} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Shield, number: "100%", label: "Electoral Integrity" },
                { icon: Users, number: "20K+", label: "Students Served" },

              ].map((stat) => (
                <div key={stat.label} className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600 rounded-lg mb-4">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Updates */}
      {featuredUpdates.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Updates</h2>
              <p className="text-lg text-gray-600">Stay informed with our recent announcements</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredUpdates.map((update: any) => (
                <Card key={update._id} className="hover:shadow-lg transition-all duration-300 border border-gray-200">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Featured
                      </span>
                      <span className="text-sm text-gray-500">{new Date(update.publishedAt).toLocaleDateString()}</span>
                    </div>
                    <CardTitle className="line-clamp-2 text-gray-900">{update.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">{update.excerpt}</p>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="hover:bg-green-50 hover:border-green-200 transition-all duration-300"
                    >
                      <Link href={`/updates/${update.slug.current}`} className="flex items-center">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white shadow-lg transition-all duration-300"
              >
                <Link href="/updates" className="flex items-center">
                  View All Updates
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
