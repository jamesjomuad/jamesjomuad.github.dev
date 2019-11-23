import { Component, OnInit } from '@angular/core';
import {SkillsService} from '../skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  experience: any = [];
  skillset: any = [];

  constructor(private skills: SkillsService) { }

  /*
  * Init Method
  */
  ngOnInit(){

    // Get skills from json file
    this.skills.get()
    .subscribe((data :any) => {
      this.experience = data.experience;
      this.skillset = data.skillset;
    });

  }

}
