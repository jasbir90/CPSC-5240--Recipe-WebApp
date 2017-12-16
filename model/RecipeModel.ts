import Mongoose = require('mongoose');
import DataAccess from '../DataAccess';
import IRecipeModel from '../interfaces/IRecipeModel';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export default class RecipeModel {
    public schema:Mongoose.Schema;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema =  mongoose.Schema(
            {
                recipeID: Number,
                recipeName: String,
                recipeOwner: String,
                recipeInstructions: String,
                recipeCategory: String,
                recipeRating: String,
                majorIngredient: String,
                calories: Number
            }, {collection: 'recipes'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IRecipeModel>("Recipes", this.schema);
    }
	
	public retrieveAllRecipes(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    } 

    public searchRecipes(response:any, filter:string): any {
        console.log("ssss "+filter);
        var query = this.model.find( { "recipeOwner": { "$regex": filter, "$options": "i" } },
    function(err,docs) { 
    } );
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    } 

	public retrieveRecipeDetails(response:any, filter:Object) {
        var query = this.model.findOne(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }
	public retrieveRecipeDetailsByCategory(response:any, filter:Object) {
        var query = this.model.find(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }
    public retrieveRecipeDetailsByUser(response:any, filter:Object) {
        var query = this.model.find(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }
 
}