import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { TasteoflifeService } from '../tasteoflife.service';
import IRecipeModel from '../share/IRecipeModel';
import { Location } from '@angular/common';
@Component({
  selector: 'app-myrecipes',
  templateUrl: './myrecipes.component.html',
  styleUrls: ['./myrecipes.component.css']
})
export class MyrecipesComponent implements OnInit {

username:string;
recipeId: string;
	recipeList: IRecipeModel[];
	name: string;
	title: string;
   tasteoflife$: TasteoflifeService;
  recipeOwner: string;
	router$: Router;

	constructor(
		route: Router,
		location: Location,
		_tasteoflife: TasteoflifeService
	) {
    _tasteoflife.getUserInfo()
      .subscribe(
        result => {
          this.username = result.displayName;

_tasteoflife.retrieveRecipeDetailsByUser(this.username)
			.subscribe(
			result => {
			this.recipeList = result;
			},
			() => { },
			() => { }

			);

        },
        () => { this.username = "not logged in"},
        () => console.log('REST call' + this.username)
      );
		this.recipeOwner = this.username ;



		

	}

	ngOnInit(): void {
	}

}
