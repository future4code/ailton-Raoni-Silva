export interface RecipeData {
  id: string;
  title: string;
  description: string;
  created_at: Date;
  creator_id: string;
}

export class Recipe {
  constructor(
    private id: string,
    private title: string,
    private description: string,
    private created: Date,
    private creatorId: string
  ) {}

  getRecipeId = () => {
    return this.id;
  };

  getRecipeTitle = () => {
    return this.title;
  };

  getRecipeDescription = () => {
    return this.description;
  };

  getRecipeCreated = () => {
    return this.created;
  };

  public getCreatorId = () => {
    return this.creatorId
}
setData(data:any){
this.created = data
}
  static toUserModel(data: any): Recipe {
    return new Recipe(data.id, data.title, data.description, data.created, data.creatorId);
  }
}
