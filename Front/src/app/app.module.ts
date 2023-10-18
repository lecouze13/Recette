import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from '../app/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from '@angular/material/sort';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';
import { LoginRHComponent } from './login-rh/login-rh.component';
import { LoginCollaborateurComponent } from './login-collaborateur/login-collaborateur.component';
import { RHComponent } from './rh/rh.component';
import { CollaborateurComponent } from './collaborateur/collaborateur.component';
import { ContainerRHComponent } from './container-rh/container-rh.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ContainerComponent,
    LoginRHComponent,
    LoginCollaborateurComponent,
    RHComponent,
    CollaborateurComponent,
    ContainerRHComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    NoopAnimationsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
