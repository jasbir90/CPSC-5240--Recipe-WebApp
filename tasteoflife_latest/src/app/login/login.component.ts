import { Component, OnInit } from '@angular/core';
import { TasteoflifeService } from '../tasteoflife.service';
import IUserModel from '../share/IUserModel';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  tasteoflife$: TasteoflifeService;
  route$: Router;

  constructor(
      _tasteoflife: TasteoflifeService,
      _route: Router,
    ) { 
      this.tasteoflife$ = _tasteoflife;
      this.route$ = _route;
    this.tasteoflife$.getUserInfo()
      .subscribe(
        result => {
          this.username = result.emails[0].value;
          this.password = "";
        },
        () => { this.username = "not logged in"},
        () => console.log('REST call' + this.username)
      );
    }

  onClick() {
    this.route$.navigate(['/welcome']);
  }
  
  onFBLogin() {
     this.tasteoflife$.validateLUsernameInfo(this.username)
     .subscribe(
       result => {
         this.tasteoflife$.userId = result;
         this.route$.navigate(['/welcome']);
       },
       () => {},
       () => console.log('REST call:' + this.username)
     );
     console.log("username:" + this.username);
     console.log("password:" + this.password);
  }

  ngOnInit() {
  }

}
