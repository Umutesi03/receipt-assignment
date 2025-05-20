"use client"

import type { Recipe } from "@/types"
import { formatDate } from "@/lib/date-utils"
import Link from "next/link"
import Image from "next/image"
import { Calendar } from "lucide-react"

interface RecentRecipesProps {
  recipes: Recipe[]
}

export function RecentRecipes({ recipes }: RecentRecipesProps) {
  // Sort recipes by dateAdded (newest first) and take the top 3
  const recentRecipes = [...recipes]
    .filter((recipe) => recipe.dateAdded)
    .sort((a, b) => {
      if (!a.dateAdded || !b.dateAdded) return 0
      return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
    })
    .slice(0, 3)

  if (recentRecipes.length === 0) {
    return null
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Recently Added Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recentRecipes.map((recipe) => (
          <Link key={recipe.slug} href={`/recipes/${recipe.slug}`} className="block group">
            <div className="border rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-40 w-full">
                <Image
                  src={`/images/${recipe.image}`}
                  alt={recipe.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                  {recipe.title}
                </h3>
                {recipe.dateAdded && (
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{formatDate(new Date(recipe.dateAdded))}</span>
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
