import {AfterViewInit, Component} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import 'jarallax';

declare var jarallax: any;
declare var $: any;

@Component({
selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements AfterViewInit {

  navActive: string;

  /*
  * Constructor Method
  */
  constructor(private router:Router, private wowService: NgwWowService) {

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd ) {
        this.navActive = event.url;
      }
    });
    
  }

  /*
  * Init Method
  */
  ngOnInit(){}

  /*
  * After View Method
  */
  ngAfterViewInit() {

    jarallax(document.querySelectorAll('.jarallax'), {speed: 0.2});

    this.wowService.init();

  }
  
}