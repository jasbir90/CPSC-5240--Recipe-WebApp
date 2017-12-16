import { Component, OnInit } from '@angular/core';
import { TasteoflifeService } from '../tasteoflife.service';
import IRecipeModel from '../share/IRecipeModel';

@Component({
  selector: 'app-searchrecipe',
  templateUrl: './searchrecipe.component.html',
  styleUrls: ['./searchrecipe.component.css']
})
export class SearchrecipeComponent implements OnInit {

  tasteoflife$: TasteoflifeService;
  ing: string;
	recipeList: IRecipeModel[];

  constructor(tasteoflife$: TasteoflifeService) {
    this.tasteoflife$ = tasteoflife$;
   }


onSubmit() {
   
    this.tasteoflife$.searchRecipes(this.ing)
    .subscribe(
      result => {
        this.recipeList = result;
      },
      () => {},
      () => {}
    );
  }

  ngOnInit() {
  }

}
