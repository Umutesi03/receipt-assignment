import { Clock, Users, ChefHat, Calendar } from "lucide-react"
import type { Recipe } from "@/types"
import { formatDate } from "@/lib/date-utils"

interface RecipeMetadataProps {
  recipe: Recipe
  className?: string
}

export function RecipeMetadata({ recipe, className = "" }: RecipeMetadataProps) {
  return (
    <div className={`flex flex-wrap gap-6 text-gray-600 ${className}`}>
      {recipe.prepTime && (
        <div className="flex items-center">
          <Clock className="h-5 w-5 mr-2 text-primary" />
          <div>
            <p className="text-sm text-gray-500">Prep Time</p>
            <p>{recipe.prepTime}</p>
          </div>
        </div>
      )}

      {recipe.cookTime && (
        <div className="flex items-center">
          <Clock className="h-5 w-5 mr-2 text-primary" />
          <div>
            <p className="text-sm text-gray-500">Cook Time</p>
            <p>{recipe.cookTime}</p>
          </div>
        </div>
      )}

      {recipe.servings && (
        <div className="flex items-center">
          <Users className="h-5 w-5 mr-2 text-primary" />
          <div>
            <p className="text-sm text-gray-500">Servings</p>
            <p>{recipe.servings}</p>
          </div>
        </div>
      )}

      {recipe.difficulty && (
        <div className="flex items-center">
          <ChefHat className="h-5 w-5 mr-2 text-primary" />
          <div>
            <p className="text-sm text-gray-500">Difficulty</p>
            <p>{recipe.difficulty}</p>
          </div>
        </div>
      )}

      {recipe.dateAdded && (
        <div className="flex items-center">
          <Calendar className="h-5 w-5 mr-2 text-primary" />
          <div>
            <p className="text-sm text-gray-500">Added</p>
            <p>{formatDate(new Date(recipe.dateAdded))}</p>
          </div>
        </div>
      )}
    </div>
  )
}
