import { Component, OnInit } from '@angular/core';
import 'jarallax';

declare var jarallax: any;

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})

export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jarallax(document.querySelectorAll('.jarallax'), {speed: 0.2});
  }

}
