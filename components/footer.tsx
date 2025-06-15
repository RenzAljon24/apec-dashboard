import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <Image
                src="/images/apec-logo.png"
                alt="PHINMA UPang APEC Logo"
                width={60}
                height={60}
                className="object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-white">PHINMA UPang APEC</h3>
                <p className="text-gray-400">Electoral Commission</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              An independent body and the electoral board of the PHINMA University of Pangasinan General Elections,
              ensuring fair and transparent electoral processes.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Updates", href: "/updates" },
                { name: "Commissioners", href: "/commissioners" },
                { name: "Laws & Regulations", href: "/laws" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>
            <div className="text-gray-300 space-y-3">
              <div>
                <p className="font-medium">PHINMA University of Pangasinan</p>
                <p className="text-gray-400">Dagupan City, Pangasinan</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">&copy; 2025 PHINMA UPang APEC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
