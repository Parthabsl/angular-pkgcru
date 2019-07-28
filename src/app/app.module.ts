import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {HomeComponent} from './Home/home.component';
import {ServerComponent} from './Server/server.component';
import {UserComponent} from './User/user.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent , HomeComponent, ServerComponent, UserComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
