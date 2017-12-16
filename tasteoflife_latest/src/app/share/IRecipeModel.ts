interface IRecipeModel{
    recipeID: number;
    recipeName: string;
    recipeOwner: string;
    recipeInstructions: string;
    recipeCategory: string;
    recipeRating: string;
    majorIngredient: string;
    calories: number;
}
export default IRecipeModel;

