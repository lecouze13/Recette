import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { MainComponent } from './Component/main/main.component';
import { FormulaireRecetteComponent } from './Component/formulaire-recette/formulaire-recette.component';
import { FormulaireIngredientComponent } from './Component/formulaire-ingredient/formulaire-ingredient.component';
import { AppRoutingModule } from "./app-routing.module";
import { RecetteComponent } from './Component/recette/recette.component';
import { ListeRecetteComponent } from './Component/liste-recette/liste-recette.component';
import { ADMINComponent } from './Component/admin/admin.component';
import { LoginComponent } from './Component/login/login.component';
import { ErrorFormComponent } from './Component/error-form/error-form.component';
import { RecommendationComponent } from './recommendation/recommendation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    FormulaireRecetteComponent,
    FormulaireIngredientComponent,
    RecetteComponent,
    ListeRecetteComponent,
    ADMINComponent,
    LoginComponent,
    ErrorFormComponent,
    RecommendationComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatDialogModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
