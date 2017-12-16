import { Component, OnInit } from '@angular/core';
import { TasteoflifeService } from '../tasteoflife.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  username:string;
  email:string;
  tasteoflife$: TasteoflifeService;

  constructor( _tasteoflife: TasteoflifeService) {
    this.tasteoflife$ = _tasteoflife;
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

