import { Component } from '@angular/core';
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
}
