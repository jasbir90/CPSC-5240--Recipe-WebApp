import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { TasteoflifeService } from '../tasteoflife.service';
import IRecipeModel from '../share/IRecipeModel';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-postrecipe',
  templateUrl: './postrecipe.component.html',
  styleUrls: ['./postrecipe.component.css']
})
export class PostrecipeComponent implements OnInit {
  postId: string;
  inputrecipe: IRecipeModel;
  inputRecipeName: string;
  inputRecipeIns: string;
  inputRecipeCat: string;
  inputRecipeIng: string;
  name: string;
  tasteoflife$: TasteoflifeService;
  router$: Router;
  username:string;
  password:string;
  
  constructor(
    router$: Router,
     
    //private tasteoflife$: TasteoflifeService
    tasteoflife$: TasteoflifeService
  ) { 
    this.tasteoflife$ = tasteoflife$;
    this.router$ = router$;
    this.inputrecipe = {recipeID:0, recipeName: '', recipeCategory: '', recipeInstructions:'', recipeOwner:'',recipeRating:'', majorIngredient:'', calories:0};
    this.tasteoflife$.getUserInfo()
      .subscribe(
        result => {
          this.username = result.displayName;
          this.password = result.emails[0].value;
        },
        () => { this.username = "not logged in"},
        () => console.log('REST call' + this.username)
      );
  
    // this.postId = route.snapshot.params['id'];
    // tasteoflife$.getRecipeForPost(this.postId)
    // .subscribe(
    //   result => {
    //     this.recipeList = result;
    //     this.name = "Post";
    //   },
    //   () => {},
    //   () => {}
    // );
  }

  onSubmit() {
    console.log(this.inputrecipe);
    this.inputrecipe.recipeName = this.inputRecipeName;
    this.inputrecipe.recipeInstructions = this.inputRecipeIns;
    this.inputrecipe.recipeCategory = this.inputRecipeCat;
    this.inputrecipe.majorIngredient = this.inputRecipeIng;
    this.inputrecipe.recipeOwner = this.username;
    
    console.log(this.inputRecipeName);
    console.log(this.inputrecipe.recipeName);
    console.log(this.inputrecipe);
    console.log(this.inputrecipe.recipeOwner);

    this.tasteoflife$.getRecipeForPost(this.inputrecipe)
    .subscribe(
      result => {
        this.inputrecipe = result;
        this.name = "Post";
        console.log('result'+this.inputrecipe.toString());
      },
      () => {},
      () => {}
    );
    this.router$.navigate(['/welcome/']);
  }

  ngOnInit() : void {
  }

}