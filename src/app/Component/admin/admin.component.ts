import { Component, Input } from '@angular/core';
import { MessageService } from '../../message.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { countryList } from '../formulaire-recette/country-list';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class ADMINComponent {
  isAffiched = false;
  isAffichedIngredient = false;



  recetteFiltered: any;
  @Input() searchText!: String;
  @Input() mymodel!: String;

  Deleterecette(thiss:any)
  {
    console.log(thiss)

      const url = 'https://lorenzo-geano-etu.pedaweb.univ-amu.fr/extranet/CuisineLOLO/deleteRecette.php';

      const data = {
        id: thiss['ID Recipe']
      };

      console.log(data)
      this.http.post(url, data).subscribe(
        response => {
          console.log(response)
         alert('Suppresion de la recette')
           location.reload();
        },
        error => {
          console.error('Erreur lors de l\'envoi de la requête :', error);
          // Traitez les erreurs ici
        }
      );

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




  getCodePaysParNom(nomPays: string): string | undefined {
    const country = this.countryList.find(country => country.name === nomPays);
    return country ? country.code : undefined;
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

      for (let i = 0; i < this.recette.length; i++) {
        console.log('ezjeezerrrrrrrrrrrrrrrrrrr\n');

        this.recette[i]["Pays d'origine"] = this.getCodePaysParNom(
          this.recette[i]["Pays d'origine"]
        );
      }
      console.log(this.recette);
      this.recetteFiltered = this.recette;
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

  valuechange(newValue: any) {
    this.searchText = newValue;
    if (this.searchText != '') {
      this.recetteFiltered = this.recette.filter(
        (data: any) =>
          data['Nom recette']
            .toString()
            .toLowerCase()
            .indexOf(this.searchText.toLowerCase()) > -1 ||
          data['Ingrédient']
            .toString()
            .toLowerCase()
            .indexOf(this.searchText.toLowerCase()) > -1
      );
    } else {
      this.recetteFiltered = this.recette;
    }
  }
}
