import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {SkillsService} from './skills.service';
import {WorkService} from './work.service';

import { AppComponent } from './app.component';
import { NgwWowModule } from 'ngx-wow';
import { AwardsComponent } from './awards/awards.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { WorksComponent } from './works/works.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';

// import { $ } from 'jquery';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'works',
    component: WorksComponent,
    data: { title: 'Works' }
  },
  {
    path: 'work/:route',
    component: WorkComponent
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AwardsComponent,
    ContactComponent,
    SkillsComponent,
    AboutComponent,
    HeaderComponent,
    WorksComponent,
    PageNotFoundComponent,
    HomeComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{useHash: true,anchorScrolling: 'enabled'}),
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    NgwWowModule,
    FormsModule
  ],
  providers: [SkillsService,WorkService],
  bootstrap: [AppComponent]
})

export class AppModule { }
