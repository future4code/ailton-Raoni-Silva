import { BaseDatabase } from "./BaseDatabase";
import { Recipe } from "../Model/recipeTypes";

export class RecipesDatabase extends BaseDatabase {
  public async createRecipe(recipe: Recipe) {
    try {
      await this.getConnection()("cookenu_recipes").insert({
        id: recipe.getRecipeId(),
        title: recipe.getRecipeTitle(),
        description: recipe.getRecipeDescription(),
        created: recipe.getRecipeCreated(),
        creatorId: recipe.getCreatorId(),
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }


async getRecipeById(id: string): Promise<Recipe | undefined> {

  const result = await this.getConnection()
      .select("*")
      .from("cookenu_recipes")
      .where({ id })

  if (!result.length) {
      return undefined
  }

  return new Recipe(
      result[0].id,
      result[0].title,
      result[0].description,
      result[0].created,
      result[0].creatorId
  )
}
}
