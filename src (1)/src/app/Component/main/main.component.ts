import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from '../../message.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  isAffiched = false;
  isAffichedIngredient = false;
  searchText = '';
  filter()
  {
    console.log(this.searchText);

  }

  Close_form_recette(newItem: boolean) {
    if(newItem=true)
      this.isAffiched=false;
  }
  Close_form_ingredient(newItem: boolean) {

    if(newItem=true)
      this.isAffichedIngredient=false;
  }

  affichage_form_ajout_recette() {
    if (this.isAffiched === false) {
      this.isAffiched = true;
    }
    else {
      this.isAffiched = false;

    }
  }
  affichage_form_ajout_ingredient() {
    if (this.isAffichedIngredient === false) {
      this.isAffichedIngredient = true;
    }
    else {
      this.isAffichedIngredient = false;
    }

  }
  GoToPAGEADMIN()
  {
  window.location.href="./ADMIN"
  }
  GoToPAGELogin()
  {
    window.location.href="./login"

  }
  GoToPAGERecommendation()
  {
    window.location.href="./Recommendation"

  }
}
