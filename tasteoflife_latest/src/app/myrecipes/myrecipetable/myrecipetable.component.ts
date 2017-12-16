import {Input, Component, OnInit } from '@angular/core';
import IRecipeModel from '../../share/IRecipeModel';

@Component({
  selector: 'app-myrecipetable',
  templateUrl: './myrecipetable.component.html',
  styleUrls: ['./myrecipetable.component.css']
})
export class MyrecipetableComponent implements OnInit {
@Input() recipes: IRecipeModel[];
@Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}