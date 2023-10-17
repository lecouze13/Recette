// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecetteComponent } from './Component/recette/recette.component';
import { MainComponent } from './Component/main/main.component';
import { AppComponent } from './app.component';
import { ListeRecetteComponent } from './Component/liste-recette/liste-recette.component';

// Importez vos composants et définissez les routes
const routes: Routes = [
    // Exemple de route
    { path: 'recette/:id', component: RecetteComponent },

    { path: 'list', component: ListeRecetteComponent },
    { path: '', component: MainComponent }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
