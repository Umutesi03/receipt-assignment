"use client"

import { useState, useEffect } from "react"
import { RecipeCard } from "@/components/recipe-card"
import type { Recipe } from "@/types"
import { Search } from "lucide-react"

export default function SearchPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await fetch("/api/recipes")
        const data = await response.json()
        setRecipes(data)
      } catch (error) {
        console.error("Error fetching recipes:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchRecipes()
  }, [])

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.some((ingredient) => ingredient.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Search Recipes</h1>

      <div className="max-w-xl mx-auto mb-8 relative">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by recipe name, description, or ingredients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
      </div>

      {loading ? (
        <div className="text-center py-8">Loading recipes...</div>
      ) : (
        <>
          {searchTerm && (
            <p className="text-gray-600 mb-6">
              {filteredRecipes.length === 0
                ? "No recipes found."
                : `Found ${filteredRecipes.length} recipe${filteredRecipes.length === 1 ? "" : "s"}.`}
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.slug} recipe={recipe} />
            ))}
          </div>
        </>
      )}
    </main>
  )
}
