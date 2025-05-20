import Link from "next/link"
import Image from "next/image"
import { Clock, Users, ChefHat } from "lucide-react"
import type { Recipe } from "@/types"

interface RecipeCardProps {
  recipe: Recipe
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link href={`/recipes/${recipe.slug}`} className="block group">
      <div className="border rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="relative h-48 w-full">
          <Image
            src={`/images/${recipe.image}`}
            alt={recipe.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
            {recipe.title}
          </h2>
          <p className="text-sm text-gray-500 mt-2 mb-4">{recipe.description.substring(0, 100)}...</p>

          {/* Recipe metadata */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            {recipe.prepTime && (
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{recipe.prepTime}</span>
              </div>
            )}

            {recipe.servings && (
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                <span>Serves {recipe.servings}</span>
              </div>
            )}

            {recipe.difficulty && (
              <div className="flex items-center">
                <ChefHat className="h-4 w-4 mr-1" />
                <span>{recipe.difficulty}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
