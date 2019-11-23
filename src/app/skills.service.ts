import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SkillsService {
  constructor(private http: HttpClient) { }

  public get() {
    return this.http.get('./assets/skills.json');
  }

}

export interface SkillsService {
  title: string;
  company: string;
  date: string;
  description: string;
}