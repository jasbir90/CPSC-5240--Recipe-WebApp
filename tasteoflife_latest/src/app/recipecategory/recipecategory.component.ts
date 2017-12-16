import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { TasteoflifeService } from '../tasteoflife.service';
import IRecipeModel from '../share/IRecipeModel';

import { Location } from '@angular/common';

@Component({
	selector: 'app-recipecategory',
	templateUrl: './recipecategory.component.html',
	styleUrls: ['./recipecategory.component.css']
})
export class RecipecategoryComponent implements OnInit {
	recipeId: string;
	recipeList: IRecipeModel[];
	name: string;
	title: string;
	router$: ActivatedRoute;

	constructor(
		private route: ActivatedRoute,
		private location: Location,
		private tasteoflife$: TasteoflifeService
	) {
		this.recipeId = route.snapshot.params['id'];

		tasteoflife$.retrieveRecipeDetailsByCategory(this.recipeId)
			.subscribe(
			result => {
			this.recipeList = result;
			},
			() => { },
			() => { }

			);

	}

	ngOnInit(): void {
	}

}
