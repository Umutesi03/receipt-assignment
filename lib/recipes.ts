import type { Recipe } from "@/types"
import path from "path"
import fs from "fs/promises"

const dataDirectory = path.join(process.cwd(), "data")

export async function getRecipes(): Promise<Recipe[]> {
  try {
    const filePath = path.join(dataDirectory, "recipes.json")
    const fileContents = await fs.readFile(filePath, "utf8")
    const data = JSON.parse(fileContents)
    return data.recipes
  } catch (error) {
    console.error("Error loading recipes:", error)
    return []
  }
}

export async function getRecipe(slug: string): Promise<Recipe | null> {
  const recipes = await getRecipes()
  return recipes.find((recipe) => recipe.slug === slug) || null
}

export async function getRecipeSlugs(): Promise<string[]> {
  const recipes = await getRecipes()
  return recipes.map((recipe) => recipe.slug)
}
