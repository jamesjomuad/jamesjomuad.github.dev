import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

declare var $: any;

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})


export class AwardsComponent implements OnInit, AfterViewInit {

  awards: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.http.get('./assets/awards.json').subscribe(
      (response :any) => {
        this.awards = response;
        setTimeout(function(){
          $('.owl-carousel').owlCarousel({
            loop:true,
            margin:25,
            nav:true,
            items:4,
            lazyLoad:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:5,
                    nav:true,
                    loop:false
                }
            }
          });
        }, 1000);
      },
      (error) => console.log(error)
    );
  }

}
