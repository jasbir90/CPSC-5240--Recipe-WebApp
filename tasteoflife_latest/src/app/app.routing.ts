import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RecipecategoryComponent } from './recipecategory/recipecategory.component';
import { PostrecipeComponent } from './postrecipe/postrecipe.component';
import { UpgradeaccountComponent } from './upgradeaccount/upgradeaccount.component';
import { SearchrecipeComponent } from './searchrecipe/searchrecipe.component';
import { RecipedetailsComponent } from './recipedetails/recipedetails.component';
import { PostjobComponent } from './postjob/postjob.component';
import { PostedjoblistComponent } from './postedjoblist/postedjoblist.component';
import { MyrecipesComponent } from './myrecipes/myrecipes.component';
import { MyprofileComponent } from './myprofile/myprofile.component';


const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'welcome', component: WelcomeComponent },
	{ path: 'recipecategory/:id', component: RecipecategoryComponent },
	{ path: 'searchrecipe', component: SearchrecipeComponent },
	{ path: 'postrecipe', component: PostrecipeComponent },
	{ path: 'upgradeaccount', component: UpgradeaccountComponent },
	{ path: 'recipedetails/:recipeID', component: RecipedetailsComponent },
	{ path: 'postjob', component: PostjobComponent },
	{ path: 'postedjoblist', component: PostedjoblistComponent },
	{ path: 'myrecipes', component: MyrecipesComponent },
	{ path: 'myprofile', component: MyprofileComponent },
];

export const routing = RouterModule.forRoot(routes);