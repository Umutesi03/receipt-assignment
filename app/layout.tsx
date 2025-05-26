import type { Metadata } from 'next'
import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Recipe Viewer',
  description: 'A delicious collection of recipes',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <header className="flex justify-end items-center p-4 gap-4 h-16 bg-gray-50">
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>

          <SignedIn>
            <Navbar />
            {children}
            <footer className="bg-gray-100 py-6 mt-12">
              <div className="container mx-auto px-4 text-center text-gray-600">
                <p>© {new Date().getFullYear()} Recipe Viewer. All rights reserved.</p>
              </div>
            </footer>
          </SignedIn>

          <SignedOut>
            <main className="flex justify-center items-center h-[calc(100vh-4rem)] text-center">
              <p className="text-lg text-gray-600">Please sign in to view recipes.</p>
            </main>
          </SignedOut>
        </body>
      </html>
    </ClerkProvider>
  )
}
