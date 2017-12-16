import Mongoose = require("mongoose");

interface IRecipeModel extends Mongoose.Document {
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