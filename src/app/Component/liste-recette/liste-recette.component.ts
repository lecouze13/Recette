import { Component } from '@angular/core';
import { MessageService } from '../../message.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { countryList } from '../formulaire-recette/country-list'; // Assurez-vous que le chemin d'importation est correct

@Component({
  selector: 'app-liste-recette',
  templateUrl: './liste-recette.component.html',
  styleUrls: ['./liste-recette.component.css']
})
export class ListeRecetteComponent {
  recette: any;
  countryList = countryList;

  imagePath = './aaa.jpg';
  isFavorite = false; // Nouvelle propriété pour suivre l'état de favori






  constructor(private messageService: MessageService, private http: HttpClient, private router: Router) {
    this.getDatar();

  }

  ngOnInit() {
    // Appeler la méthode pour récupérer les données du service


  }
  favoris_button_function(recetteItem: any) {


    // console.log(recetteItem["Favoris"]) // Inversez l'état de favori pour cet élément
    // console.log(recetteItem["ID Recipe"]);
    console.log(recetteItem.Favoris)

    console.log(recetteItem.Favoris)
    if (recetteItem.Favoris === "false") {
      recetteItem.Favoris = "true";
      this.envoyerRequete("true", recetteItem["ID Recipe"]);
    }
    else if (recetteItem.Favoris === "true") {
      recetteItem.Favoris = "false";
      this.envoyerRequete("false", recetteItem["ID Recipe"]);
    }
  }
  getDatar() {
    // Appeler la fonction du service pour récupérer les données
    this.messageService.getData().subscribe((data: any) => {
      this.recette = data;
      // Vous pouvez maintenant traiter les données ici
      console.log(this.recette); // Afficher les données dans la console

    });
  }
  goToPage(recipeId: string) {
    this.router.navigate(['/recette', recipeId]);
    // Utilisez '/recette/:id' avec le paramètre
  }
  envoyerRequete(favorie: any, idRecette: any) {
    const url = 'https://lorenzo-geano-etu.pedaweb.univ-amu.fr/extranet/CuisineLOLO/favoris.php';

    const data = {
      favoris: favorie,
      idRecette: idRecette
    };

    // Envoyer la requête POST
    this.http.post(url, data).subscribe(
      response => {
        console.log(response)
        console.log('changement effectué');
        location.reload();
      },
      error => {
        console.error('Erreur lors de l\'envoi de la requête :', error);
        // Traitez les erreurs ici
      }
    );
  }
}
