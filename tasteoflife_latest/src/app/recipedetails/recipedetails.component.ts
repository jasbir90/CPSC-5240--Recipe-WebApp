import { Input, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import IRecipeModel from '../share/IRecipeModel';

import { TasteoflifeService } from '../tasteoflife.service';
import { Location } from '@angular/common';

@Component({
	selector: 'app-recipedetails',
	templateUrl: './recipedetails.component.html',
	styleUrls: ['./recipedetails.component.css']
})
export class RecipedetailsComponent implements OnInit {
recipeDetails: IRecipeModel;
recipeOwner: string;
	recipeName: string;
@Input()	recipeID: string;
	calories: number;
	ingredients: string;
	category: string;
	instructions: string;
	name: string;
	rating: number;
	router$: ActivatedRoute;


	constructor(
		private route: ActivatedRoute,
		private location: Location,
		private tasteoflife$: TasteoflifeService
	) {
		
		this.recipeID = route.snapshot.params['recipeID'];

		tasteoflife$.retrieveRecipeDetailsByName(this.recipeID)
			.subscribe(
			result => { this.recipeOwner = result.recipeOwner;
				this.recipeName= result.recipeName;
				this.recipeID=result.recipeID;
				this.calories=result.calories;
				this.ingredients=result.majorIngredient;
				this.category=result.recipeCategory;
				this.instructions=result.recipeInstructions;
				this.name=result.recipeName;
				this.rating=result.recipeRating;
	
			},
			() => { },
			() => { }

			);

	}

	ngOnInit(): void {
	}

}



