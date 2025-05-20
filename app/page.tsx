import { getRecipes } from "@/lib/recipes"
import { RecipeCard } from "@/components/recipe-card"
import { RecentRecipes } from "@/components/recent-recipes"

export default async function Home() {
  const recipes = await getRecipes()

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-2 text-center">Delicious Recipes</h1>
      <p className="text-gray-600 text-center mb-8">Discover our collection of tasty recipes for every occasion</p>

      {/* Recent recipes section */}
      <RecentRecipes recipes={recipes} />

      {/* All recipes section */}
      <h2 className="text-2xl font-bold mt-12 mb-6">All Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.slug} recipe={recipe} />
        ))}
      </div>
    </main>
  )
}
