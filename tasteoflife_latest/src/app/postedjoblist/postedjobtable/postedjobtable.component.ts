import { Input, Component, OnInit } from '@angular/core';
import IJobModel from '../../share/IJobModel';

@Component({
  selector: 'postedjobtable',
  templateUrl: './postedjobtable.component.html',
  styleUrls: ['./postedjobtable.component.css']
})
export class PostedjobtableComponent implements OnInit {
  @Input() jobs: IJobModel[];
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
