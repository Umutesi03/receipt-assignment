"use client"

import Image from "next/image"
import Link from "next/link"
import { getRecipe } from "@/lib/recipes"
import { ArrowLeft, Printer } from "lucide-react"
import { notFound } from "next/navigation"
import { RecipeMetadata } from "@/components/recipe-metadata"

export default async function RecipePageClient({ params }: { params: { slug: string } }) {
  const recipe = await getRecipe(params.slug)

  if (!recipe) {
    notFound()
  }

  return (
    <main className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to recipes
        </Link>

        <button onClick={() => window.print()} className="inline-flex items-center text-gray-600 hover:text-gray-900">
          <Printer className="mr-1 h-4 w-4" />
          <span>Print</span>
        </button>
      </div>

      <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
        <Image
          src={`/images/${recipe.image}`}
          alt={recipe.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">{recipe.title}</h1>
      <p className="text-gray-700 mb-6">{recipe.description}</p>

      {/* Recipe metadata */}
      <RecipeMetadata recipe={recipe} className="mb-8" />

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
          <ul className="space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block h-2 w-2 rounded-full bg-primary mt-2 mr-2"></span>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
          <ol className="space-y-4">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="flex">
                <span className="flex-shrink-0 flex items-center justify-center bg-primary text-white rounded-full h-6 w-6 mr-3 font-bold text-sm">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </main>
  )
}
