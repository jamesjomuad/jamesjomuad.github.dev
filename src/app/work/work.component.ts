import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {WorkService} from '../work.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})


export class WorkComponent implements OnInit, AfterViewInit {

  work: any = [];

  constructor(route: ActivatedRoute, private workService: WorkService) { 
    route.params.subscribe(params => {

      this.workService.get().subscribe(
        (response :any) => {
          this.work = this.getProject(params.route,response)
        },
        (error) => console.log(error)
      );

    })
  }

  ngOnInit() {}

  ngAfterViewInit() {
    $(document).ready(function(){
      $("a.fancybox").fancybox({
        buttons: [
            "share",
            "slideShow",
            "fullScreen",
            "thumbs",
            "close"
        ],
        thumbs : {
            autoStart : true
        }
      });
    });
  }

  getProject(name, data) {
    return data.filter(function (obj) {
      return obj.route === name;
    })[0];
  }

}
