import { Component, OnInit } from '@angular/core';
import {WorkService} from '../work.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit  {

  works: any = [];

  constructor(private work: WorkService) { }

  ngOnInit() {
    // Get Works from json file
    this.work.get()
    .subscribe((data :any) => {
      this.works = data;
    });
  }

  getThumb(thumbnails: any){
    if (typeof thumbnails === 'undefined')
      return false;
      
    if (typeof thumbnails === 'object') {
      return thumbnails[0];
    }

    return thumbnails;
  }

}
