import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import IRecipeModel from './share/IRecipeModel';
import IJobModel from './share/IJobModel';

@Injectable()
export class TasteoflifeService {
  host:string = '';
  userId:string = "";

  constructor(private http: Http) { }

  setUserid(uId:string) {
    this.userId = uId;
  }

  validateLUsernameInfo(username:string) {
    return this.http.get( this.host + '/api/user/username/' + username)
    .map(response => response.json());
  }

  getAllPosts() {
    return this.http.get( this.host + '/api/userPost/')
    .map(response => response.json());
  }

  getCommentsForPost(pId: string) {
    return this.http.get( this.host + '/api/comment/post/' + pId)
    .map(response => response.json());
  }
  
  retrieveRecipeDetailsByCategory(rId: string) {
    var result = this.http.get( this.host + '/app/recipe/category/' + rId)
    .map(response => response.json());

    return result;
  }

  retrieveRecipeDetailsByUser(rId: string) {
    var result = this.http.get( this.host + '/app/recipe/user/' + rId)
    .map(response => response.json());
    return result;
  }
  
  retrieveRecipeDetailsByName(rName: string) {
    var result=  this.http.get( this.host + '/app/recipe/' + rName)
    .map(response => response.json());
    return result;
  }

  searchRecipes(rName: string) {
    var result=  this.http.get( this.host + '/app/search/' + rName)
    .map(response => response.json());
    return result;
  }

  getRecipeForPost(recipe: IRecipeModel) {
    console.log("inside gerrecipepost");
    return this.http.post( this.host + '/app/recipe/', recipe)
    .map(response => response.json());
  }

  getJobForPost(job: IJobModel) {
    console.log("inside getjobpost");
    return this.http.post( this.host + '/app/job/', job)
    .map(response => response.json());
  }

  retrievePostedJobs() {
    return this.http.get( this.host + '/app/job/')
    .map(response => response.json());
  }
  getUserInfo() {
    return this.http.get( this.host + '/auth/userdata')
    .map(response => response.json());
  }

}
