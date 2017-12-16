function initXHR(x, value) {
	console.log(x); 
	if (x == 'home') {
		document.getElementById("home").style.display = "block";
		document.getElementById("recipeDetails").style.display = "none";
		document.getElementById("recipes").style.display = "none";
		document.getElementById("recipeCategory").style.display = "none";
		document.getElementById("search").style.display = "none";
		document.getElementById("upgrade").style.display = "none";
		document.getElementById("postRecipe").style.display = "none";
	}
	else if (x == 'recipeDetails') {
		retrieveActiveListsFromServer('/app/recipe/' + value, 'recipeDetails');
		document.getElementById("home").style.display = "none";
		document.getElementById("recipeDetails").style.display = "block";
		document.getElementById("recipes").style.display = "none";
		document.getElementById("recipeCategory").style.display = "none";
		document.getElementById("search").style.display = "none";
		document.getElementById("upgrade").style.display = "none";
		document.getElementById("postRecipe").style.display = "none";
	}
	else if (x == 'recipeCategory') {
		retrieveActiveListsFromServer('/app/recipe/category/' + value, 'recipeCategory');
		document.getElementById("home").style.display = "none";
		document.getElementById("recipeCategory").style.display = "block";
		document.getElementById("recipes").style.display = "none";
		document.getElementById("recipeDetails").style.display = "none";
		document.getElementById("search").style.display = "none";
		document.getElementById("upgrade").style.display = "none";
		document.getElementById("postRecipe").style.display = "none";
	}
	else if (x == 'search') {
		document.getElementById("home").style.display = "none";
		document.getElementById("recipeCategory").style.display = "none";
		document.getElementById("recipes").style.display = "none";
		document.getElementById("recipeDetails").style.display = "none";
		document.getElementById("search").style.display = "block";
		document.getElementById("upgrade").style.display = "none";
		document.getElementById("postRecipe").style.display = "none";
	}
	else if (x == 'upgrade') {
		document.getElementById("home").style.display = "none";
		document.getElementById("recipeCategory").style.display = "none";
		document.getElementById("recipes").style.display = "none";
		document.getElementById("recipeDetails").style.display = "none";
		document.getElementById("search").style.display = "none";
		document.getElementById("upgrade").style.display = "block";
		document.getElementById("postRecipe").style.display = "none";
	}
	else if (x == 'postRecipe') {
		document.getElementById("home").style.display = "none";
		document.getElementById("recipeCategory").style.display = "none";
		document.getElementById("recipes").style.display = "none";
		document.getElementById("recipeDetails").style.display = "none";
		document.getElementById("search").style.display = "none";
		document.getElementById("upgrade").style.display = "none";
		document.getElementById("postRecipe").style.display = "block";
	}
	else {
		document.getElementById("home").style.display = "block";
		document.getElementById("recipeDetails").style.display = "none";
		document.getElementById("recipes").style.display = "none";
		document.getElementById("recipeCategory").style.display = "none";
		document.getElementById("search").style.display = "none";
		document.getElementById("upgrade").style.display = "none";
		document.getElementById("postRecipe").style.display = "none";
	}
}

function retrieveActiveListsFromServer(url, operation) {
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var returnValues = JSON.parse(xmlhttp.responseText);
			if (operation == "recipes") {
				populateListsView('recipes', returnValues);
			}
			else if (operation == "recipeDetails") {
				populateRecipeDetails('recipeDetails', returnValues);				
			}
			else if (operation == "recipeCategory") {
				populateListsView('recipeCategory', returnValues);				
			}
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

//DOM based function
function populateListsView(elementId, lists) {
	var element = document.getElementById(elementId);
	var newElement = "";
	newElement += "<div class=\"background\">";
    newElement += "<h1><u>"+lists[0].recipeCategory+"</u></h1>";
      
	for (var i = 0; i < lists.length; i++) {
		
		newElement += "<div class=\"container\">";
		newElement += "<div class=\"recipesCategory\">";
		newElement += "<a href=\"javascript:initXHR('recipeDetails'," +  lists[i].recipeID + ")\">" + lists[i].recipeName + "</a>";
		newElement += "</div>";
		newElement += "</div>";
	}
	element.innerHTML = newElement;
}


//DOM based function
function populateRecipeDetails(elementId, recipeDetails) {
	var element = document.getElementById(elementId);
	var newElement = "<div class=\"background\">";
	newElement += "<div class=\"recipesDetails\">";
	newElement += "<h3>Recipe Details</h3>";
	newElement += "<h4>" + recipeDetails.recipeName + "</h4>";
	newElement += "<p>Recipe Owner: " + recipeDetails.recipeOwner  + "</p>";
	newElement += "<p>Ingredients: " + recipeDetails.majorIngredient  + "</p>";
	newElement += "<p>Category: " + recipeDetails.recipeCategory  + "</p>";
	newElement += "</div>";
	newElement += "</div>";
	
	element.innerHTML = newElement;
}

