import Link from "next/link"
import { Search, Home, BookOpen } from "lucide-react"

export function Navbar() {
  return (
    <nav className="bg-primary text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold flex items-center">
            <BookOpen className="mr-2 h-6 w-6" />
            Recipe Viewer
          </Link>

          <div className="flex space-x-4">
            <Link href="/" className="flex items-center hover:text-white/80 transition-colors">
              <Home className="mr-1 h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link href="/search" className="flex items-center hover:text-white/80 transition-colors">
              <Search className="mr-1 h-5 w-5" />
              <span>Search</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
