import { getRecipe, getRecipeSlugs } from "@/lib/recipes"
import { notFound } from "next/navigation"
import RecipeDetail from "@/components/recipe-detail"

export async function generateStaticParams() {
  const slugs = await getRecipeSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function RecipePage({ params }: { params: { slug: string } }) {
  const recipe = await getRecipe(params.slug)

  if (!recipe) {
    notFound()
  }

  return <RecipeDetail recipe={recipe} />
}
