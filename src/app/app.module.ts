import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {HomeComponent} from './Home/home.component';
import {ServerComponent} from './Server/server.component';
import {UserComponent} from './User/user.component';
import {Routes, RouterModule} from '@angular/router';

const approutes: Routes = [
  {path : '', component: HomeComponent},
  {path : '/user', component: UserComponent},
  {path : '/server', component: ServerComponent},
  ];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(approutes) ],
  declarations: [ AppComponent, HelloComponent , HomeComponent, ServerComponent, UserComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
