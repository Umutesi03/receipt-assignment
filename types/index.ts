export interface Recipe {
  slug: string
  title: string
  description: string
  image: string
  ingredients: string[]
  instructions: string[]
  prepTime: string
  cookTime: string
  servings: number
  difficulty: "Easy" | "Medium" | "Hard"
  calories: number
  tags: string[]
  dateAdded?: string // ISO date string
}
