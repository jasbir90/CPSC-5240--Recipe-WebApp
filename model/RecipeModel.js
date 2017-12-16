"use strict";
exports.__esModule = true;
var DataAccess_1 = require("../DataAccess");
var mongoose = DataAccess_1["default"].mongooseInstance;
var mongooseConnection = DataAccess_1["default"].mongooseConnection;
var RecipeModel = (function () {
    function RecipeModel() {
        this.createSchema();
        this.createModel();
    }
    RecipeModel.prototype.createSchema = function () {
        this.schema = mongoose.Schema({
            recipeID: Number,
            recipeName: String,
            recipeOwner: String,
            recipeInstructions: String,
            recipeCategory: String,
            recipeRating: String,
            majorIngredient: String,
            calories: Number
        }, { collection: 'recipes' });
    };
    RecipeModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Recipes", this.schema);
    };
    RecipeModel.prototype.retrieveAllRecipes = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    RecipeModel.prototype.searchRecipes = function (response, filter) {
        console.log("ssss " + filter);
        var query = this.model.find({ "recipeOwner": { "$regex": filter, "$options": "i" } }, function (err, docs) {
        });
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    RecipeModel.prototype.retrieveRecipeDetails = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    RecipeModel.prototype.retrieveRecipeDetailsByCategory = function (response, filter) {
        var query = this.model.find(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    RecipeModel.prototype.retrieveRecipeDetailsByUser = function (response, filter) {
        var query = this.model.find(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return RecipeModel;
}());
exports["default"] = RecipeModel;
