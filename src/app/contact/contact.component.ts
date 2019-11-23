import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})


export class ContactComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit(){}

  contactMe(form){
    var mail = $('[href*="mailto"]').attr('href') + "?";

    mail += [
      'subject=',
      form.name,
      ' - ',
      form.email,
      '&body=',
      form.body
    ].join('');

    document.location.href = mail;

    console.log(mail)
  }

}
