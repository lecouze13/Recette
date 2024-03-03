import { Component, Input } from '@angular/core';
import { MessageService } from '../../message.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { countryList } from '../formulaire-recette/country-list'; // Assurez-vous que le chemin d'importation est correct
import { RecetteComponent } from '../recette/recette.component';

@Component({
  selector: 'app-liste-recette',
  templateUrl: './liste-recette.component.html',
  styleUrls: ['./liste-recette.component.css'],
})
export class ListeRecetteComponent {
  recette: any;
  recetteForlike: any;
  EtatLike: any;
  EtatDislike: any;
  recetteFiltered: any;
  countryList = countryList;
  NbLike: any;
  NbDisLike: any;

  @Input() searchText!: String;
  @Input() mymodel!: String;

  imagePath = './aaa.jpg';
  isFavorite = false; // Nouvelle propriété pour suivre l'état de favori

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
    private router: Router
  ) {
    this.getDatar();
    this.NbLike = 0;
    this.NbDisLike = 0;
    this.EtatLike = false;
    this.EtatDislike = false
  }

  ngOnInit() { }

  getCodePaysParNom(nomPays: string): string | undefined {
    const country = this.countryList.find(
      (country) => country.name === nomPays
    );
    return country ? country.code : undefined;
  }
  favoris_button_function(recetteItem: any) {
    // console.log(recetteItem["Favoris"]) // Inversez l'état de favori pour cet élément
    // console.log(recetteItem["ID Recipe"]);
    console.log(recetteItem.Favoris);

    console.log(recetteItem.Favoris);
    if (recetteItem.Favoris === 'false') {
      recetteItem.Favoris = 'true';
      this.envoyerRequete('true', recetteItem['ID Recipe']);
    } else if (recetteItem.Favoris === 'true') {
      recetteItem.Favoris = 'false';
      this.envoyerRequete('false', recetteItem['ID Recipe']);
    }
  }
  getDatar() {
    // Appeler la fonction du service pour récupérer les données
    this.messageService.getData().subscribe((data: any) => {
      this.recette = data;
      // Vous pouvez maintenant traiter les données ici
      console.log(this.recette); // Afficher les données dans la console

      for (let i = 0; i < this.recette.length; i++) {

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
  Dislike(recipeId: string) {


    console.log(
      this.recette.map(
        (element: { [x: string]: string }) => element['ID Recipe'] == recipeId
      )
    );

    this.recetteForlike = this.recette.filter(
      (element: { [x: string]: string }) => element['ID Recipe'] == recipeId
    );

    if (this.EtatDislike === true) {
      this.recetteForlike[0].nbdislike--;
      this.EtatDislike = false
    } else {
      this.recetteForlike[0].nbdislike++;
      this.EtatDislike = true

    }
    console.log(this.EtatDislike)

    console.log(this.recetteForlike);



    console.log(recipeId);
    const url =
      'https://lorenzo-geano-etu.pedaweb.univ-amu.fr/extranet/CuisineLOLO/Dislike.php';

    const data = {
      recipeId: recipeId,
    };

    // Envoyer la requête POST
    this.http.post(url, data).subscribe(
      (response) => {
        console.log(response);
        console.log('changement effectué');
      },
      (error) => {
        console.error("Erreur lors de l'envoi de la requête :", error);
        // Traitez les erreurs ici
      }
    );
  }
  // getDislike(recipeId: string)
  // {
  //   console.log(recipeId)
  //   const url =
  //   'https://lorenzo-geano-etu.pedaweb.univ-amu.fr/extranet/CuisineLOLO/getDislike.php';

  // const data = {
  //   recipeId: recipeId,
  // };

  // // Envoyer la requête POST
  // this.http.post(url, data).subscribe(
  //   (response) => {
  //     console.log(response);
  //     console.log('changement effectué');
  //     this.NbDisLike=response

  //   },
  //   (error) => {
  //     console.error("Erreur lors de l'envoi de la requête :", error);
  //     // Traitez les erreurs ici
  //   }
  // );
  // }

  Like(recipeId: string) {
    console.log(
      this.recette.map(
        (element: { [x: string]: string }) => element['ID Recipe'] == recipeId
      )
    );

    this.recetteForlike = this.recette.filter(
      (element: { [x: string]: string }) => element['ID Recipe'] == recipeId
    );

    if (this.EtatLike === true) {
      this.recetteForlike[0].nblike--;
      this.EtatLike = false
    } else {
      this.recetteForlike[0].nblike++;
      this.EtatLike = true

    }
    console.log(this.EtatLike)

    console.log(this.recetteForlike);

    console.log(recipeId)
    const url =
      'https://lorenzo-geano-etu.pedaweb.univ-amu.fr/extranet/CuisineLOLO/like.php';

    const data = {
      recipeId: recipeId,
    };

    // Envoyer la requête POST
    this.http.post(url, data).subscribe(
      (response) => {
        console.log(response);
        console.log('changement effectué');
        // location.reload();
      },
      (error) => {
        console.error("Erreur lors de l'envoi de la requête :", error);
        // Traitez les erreurs ici
      }
    );
  }

  // getLike(recipeId: string)
  // {
  //   console.log(recipeId)
  //   const url =
  //   'https://lorenzo-geano-etu.pedaweb.univ-amu.fr/extranet/CuisineLOLO/getlike.php';

  // const data = {
  //   recipeId: recipeId,
  // };

  // // Envoyer la requête POST
  // this.http.post(url, data).subscribe(
  //   (response) => {
  //     console.log(response);
  //     console.log('changement effectué');
  //     this.NbLike=response
  //     // location.reload();
  //   },
  //   (error) => {
  //     console.error("Erreur lors de l'envoi de la requête :", error);
  //     // Traitez les erreurs ici
  //   }
  // );

  //}
  envoyerRequete(favorie: any, idRecette: any) {
    const url =
      'https://lorenzo-geano-etu.pedaweb.univ-amu.fr/extranet/CuisineLOLO/favoris.php';

    const data = {
      favoris: favorie,
      idRecette: idRecette,
    };

    // Envoyer la requête POST
    this.http.post(url, data).subscribe(
      (response) => {
        console.log(response);
        console.log('changement effectué');
        // location.reload();
      },
      (error) => {
        console.error("Erreur lors de l'envoi de la requête :", error);
        // Traitez les erreurs ici
      }
    );
  }
  getCardTextStyles(ingredients: string[]): any {
    const cardTextStyles: any = {};

    // Calculer la hauteur du contenu en pixels (ajustez en fonction de vos besoins)
    const contentHeight = ingredients.length * 20; // 20 pixels par ligne, ajustez selon vos besoins
    console.log(contentHeight)
    // Vérifier si la hauteur du contenu dépasse la hauteur spécifiée
    if (contentHeight > 130) {
      cardTextStyles['overflow-y'] = 'scroll';
      cardTextStyles['height'] = '130px';
    }
    else {
      cardTextStyles['overflow-y'] = 'hidden';
      cardTextStyles['height'] = '130px';
    }

    return cardTextStyles;
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
