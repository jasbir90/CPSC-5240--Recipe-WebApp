import { Input, Component, OnInit } from '@angular/core';
import IRecipeModel from '../../share/IRecipeModel';


@Component({
  selector: 'recipetable',
  templateUrl: './recipetable.component.html',
  styleUrls: ['./recipetable.component.css']
})
export class RecipetableComponent implements OnInit {
@Input() recipes: IRecipeModel[];
@Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
