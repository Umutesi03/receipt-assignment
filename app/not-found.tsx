import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container mx-auto py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Recipe Not Found</h2>
      <p className="mb-8">We couldn't find the recipe you were looking for.</p>
      <Link
        href="/"
        className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
      >
        Return to Recipes
      </Link>
    </div>
  )
}
