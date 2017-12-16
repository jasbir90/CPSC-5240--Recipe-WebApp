var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();
var http = require('http');
chai.use(chaiHttp);

/*
  * Test the GET recipes route
  */
describe('Test get recipes result', function () {
  this.timeout(150000);
    var requestResult;
    var response;
         
before(function (done) {
chai.request("http://tasteoflife.azurewebsites.net")
            .get("/app/recipe/")
            .end(function (err, res) {
                requestResult = res.body;
                response = res;
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
});


it('Should return a recipe array object with atleast 1 object', function (){
        expect(response).to.have.status(200);
        expect(response.body).to.be.an.object;
        expect(response.body).to.have.length.above(0);
        expect(response).to.have.headers;
});

it('The first entry in the recipe array has known properties', function(){
	    expect(requestResult[0]).to.include.keys('_id');
	    expect(requestResult[0]).to.have.property('recipeID');
        expect(requestResult[0]).to.have.property('recipeName');
        expect(requestResult[0]).to.have.property('recipeOwner');
		expect(requestResult[0]).to.have.property('recipeInstructions');
        expect(requestResult[0]).to.have.property('recipeCategory');
        expect(requestResult[0]).to.have.property('majorIngredient');
		expect(response.body).to.not.be.a.string;
	});

it('The elements in the recipe array have the expected properties', function(){
		expect(response.body).to.satisfy(
			function (body) {
				for (var i = 0; i < body.length; i++) {
					expect(body[i]).to.include.keys('_id');
	                expect(body[i]).to.have.property('recipeID');
                    expect(body[i]).to.have.property('recipeName');
                    expect(body[i]).to.have.property('recipeOwner');
		            expect(body[i]).to.have.property('recipeInstructions');
                    expect(body[i]).to.have.property('recipeCategory');
                    expect(body[i]).to.have.property('majorIngredient');
				}
				return true;
			});
	});

it('The elements in the recipe array have the expected type of properties', function(){
        expect(response.body).to.satisfy(
            function (body) {
                for (var i = 0; i < body.length; i++) {
                    expect(body[i]).to.have.property('recipeID').that.is.a('number');
                    expect(body[i]).to.have.property('recipeOwner').that.is.a('string');
                    expect(body[i]).to.have.property('recipeName').that.is.a('string');
                    expect(body[i]).to.have.property('recipeInstructions').that.is.a('string');
                    expect(body[i]).to.have.property('recipeCategory').that.is.a('string');
                    expect(body[i]).to.have.property('majorIngredient').that.is.a('string');
                }
                return true;
            });
    });
   

});

/*
  * Test the GET job route
  */
describe('Test get job result', function () {
  this.timeout(150000);
    var requestResult;
    var response;
         
before(function (done) {
chai.request("http://tasteoflife.azurewebsites.net")
            .get("/app/job/")
            .end(function (err, res) {
                requestResult = res.body;
                response = res;
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
});


it('Should return an job array object with atleast 1 object', function (){
        expect(response).to.have.status(200);
        expect(response.body).to.be.an.object;
        expect(response.body).to.have.length.above(0);
        expect(response).to.have.headers;
});

it('The first entry in the job array has known properties', function(){
        expect(requestResult[0]).to.have.property('jobDescription');
        expect(requestResult[0]).to.have.property('jobID');
        expect(requestResult[0]).to.have.property('jobName');
        expect(requestResult[0]).to.have.property('restaurantName');
        expect(response.body).to.not.be.a.string;
    });

it('The elements in the job array have the expected properties', function(){
        expect(response.body).to.satisfy(
            function (body) {
                for (var i = 0; i < body.length; i++) {
                    expect(body[i]).to.include.property('jobDescription');
                    expect(body[i]).to.have.property('jobID');
                    expect(body[i]).to.have.property('jobName');
                    expect(body[i]).to.have.property('restaurantName');
                }
                return true;
            });
    });

it('The elements in the job array have the expected type of properties', function(){
        expect(response.body).to.satisfy(
            function (body) {
                for (var i = 0; i < body.length; i++) {
                    expect(body[i]).to.include.property('jobDescription').that.is.a('string');
                    expect(body[i]).to.have.property('jobID').that.is.a('number');
                    expect(body[i]).to.have.property('jobName').that.is.a('string');
                    expect(body[i]).to.have.property('restaurantName').that.is.a('string');
                }
                return true;
            });
    });
});


/*
  * Test the POST recipe route
  */
//describe('Test post recipe', ()=> {
         
//before(function (done) {

//});



describe('Test post recipes', function () {
  this.timeout(150000);
    var requestResult;
    var response;
         
before(function (done) {
let recipe={
        recipeName:"Orange Meringue Pie",
        recipeInstructions: "Preheat oven to 400 degrees F (205 degrees C). Line pastry with aluminum foil and a layer of pie weights or dried beans. Bake in the preheated oven until edge of crust is golden, about 10 minutes. Carefully remove the foil and weights; bake about 5 minutes more",
        recipeCategory : "Cakes & Desserts",
        majorIngredient : "Egg, Sugar, Orange Zest, Corn starch, Lime",
        recipeOwner : "Jasbir"
    }
    chai.request("http://tasteoflife.azurewebsites.net")
            .post('/app/recipe/')
            .send(recipe)
            .end(function(err, res)  {
                requestResult = res.body;
                response = res;
                expect(res).to.have.status(200);
                done();
            });
            });

it('It should have the success status response ', function(){  
        
        expect(response).to.have.status(200);
        expect(response.body).to.be.an.object;
});
it('It should have the success status response ', function(){  
        
        expect(response.body).to.have.property('message');
});

it('It should have the known property in response body', function(){  
        
        expect(response.body).to.have.property('message').to.be.a('string');
});

it('It should have the expected value in response body', function(){  
        
        expect(response.body).to.have.property('message').eql("Recipe created!");
});

        });