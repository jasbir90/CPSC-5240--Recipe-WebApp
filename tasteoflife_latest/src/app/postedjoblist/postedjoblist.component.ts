import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { TasteoflifeService } from '../tasteoflife.service';
import IJobModel from '../share/IJobModel'

import { Location } from '@angular/common';

@Component({
  selector: 'app-postedjoblist',
  templateUrl: './postedjoblist.component.html',
  styleUrls: ['./postedjoblist.component.css']
})
export class PostedjoblistComponent implements OnInit {
  jobId: string;
	jobList: IJobModel[];
	name: string;
	title: string;
	router$: ActivatedRoute;

  constructor(
    private route: ActivatedRoute,
		private location: Location,
		private tasteoflife$: TasteoflifeService) { 
      this.jobId = route.snapshot.params['id'];

		tasteoflife$.retrievePostedJobs()
			.subscribe(
			result => {
			this.jobList = result;
			},
			() => { },
			() => { }

			);

    }

  ngOnInit() : void {
  }

}
