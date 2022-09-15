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
}
