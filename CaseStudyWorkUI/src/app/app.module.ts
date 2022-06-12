import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { NaviComponent } from './components/navi/navi.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NaviComponent,
    AddUserComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
	  ToastrModule.forRoot({positionClass:"toast-bottom-right"})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
