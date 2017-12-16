import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { TasteoflifeService } from '../tasteoflife.service';
import IJobModel from '../share/IJobModel';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent implements OnInit {
  postId: string;
  inputJob: IJobModel;
  inputJobName: string;
  inputRestaurantName: string;
  inputJobDescription: string;
  name: string;
  tasteoflife$: TasteoflifeService
  router$: Router;

  constructor(router$: Router,     
    //private tasteoflife$: TasteoflifeService
    tasteoflife$: TasteoflifeService) { 
      this.tasteoflife$ = tasteoflife$;
      this.router$ = router$;
      this.inputJob = {jobID:0, jobName: '', restaurantName: '', jobDescription:''};
    }

    onSubmit() {
    console.log(this.inputJob);
    this.inputJob.jobName = this.inputJobName;
    this.inputJob.restaurantName = this.inputRestaurantName;
    this.inputJob.jobDescription = this.inputJobDescription;

    this.tasteoflife$.getJobForPost(this.inputJob)
    .subscribe(
      result => {
        this.inputJob = result;
        this.name = "Post";
        console.log('result'+this.inputJob.toString());
      },
      () => {},
      () => {}
    );
    this.router$.navigate(['/welcome/']);
  }


  ngOnInit() {
  }

}
