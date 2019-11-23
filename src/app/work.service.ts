import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WorkService {

  constructor(private http: HttpClient) { }

  public get() {
    return this.http.get('./assets/works.json');
  }

}
