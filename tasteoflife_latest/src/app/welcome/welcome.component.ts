import { Component, OnInit } from '@angular/core';
import { TasteoflifeService } from '../tasteoflife.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

username:string;
  email:string;
  title:string;
  tasteoflife$: TasteoflifeService;
  userObject:any = {};

  constructor( _tasteoflife: TasteoflifeService) {
    this.tasteoflife$ = _tasteoflife;
    this.title = 'Welcome works!';
     this.tasteoflife$.getUserInfo()
      .subscribe(
        result => {
          this.username = result.displayName;
          this.email = result.emails[0].value;
        },
        () => { this.username = "not logged in"},
        () => console.log('REST call' + this.username)
      );
  }

  ngOnInit() {
  }

}
