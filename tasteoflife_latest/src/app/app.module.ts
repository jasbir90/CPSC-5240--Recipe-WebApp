import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { APP_BASE_HREF } from '@angular/common';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { RecipecategoryComponent } from './recipecategory/recipecategory.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { TasteoflifeService } from './tasteoflife.service';
import { PostrecipeComponent } from './postrecipe/postrecipe.component';
import { SearchrecipeComponent } from './searchrecipe/searchrecipe.component';
import { UpgradeaccountComponent } from './upgradeaccount/upgradeaccount.component';
import { RecipetableComponent } from './recipecategory/recipetable/recipetable.component';
import { RecipedetailsComponent } from './recipedetails/recipedetails.component';
import { PostjobComponent } from './postjob/postjob.component';
import { PostedjoblistComponent } from './postedjoblist/postedjoblist.component';
import { PostedjobtableComponent } from './postedjoblist/postedjobtable/postedjobtable.component';
import { LoginComponent } from './login/login.component';
import { MyrecipesComponent } from './myrecipes/myrecipes.component';
import { MyrecipetableComponent } from './myrecipes/myrecipetable/myrecipetable.component';
import { MyprofileComponent } from './myprofile/myprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipecategoryComponent,
    WelcomeComponent,
    PostrecipeComponent,
    SearchrecipeComponent,
    UpgradeaccountComponent,
    RecipetableComponent,
    RecipedetailsComponent,
    PostjobComponent,
    PostedjoblistComponent,
    PostedjobtableComponent,
    LoginComponent,
    MyrecipesComponent,
    MyrecipetableComponent,
    MyprofileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [ {provide: APP_BASE_HREF, useValue: '/'}, TasteoflifeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
