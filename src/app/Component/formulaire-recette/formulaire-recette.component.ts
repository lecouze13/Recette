import { Component, Input } from '@angular/core';
import { MessageService } from '../../message.service';
import { HttpClient } from '@angular/common/http';
import { countryList } from './country-list'; // Assurez-vous que le chemin d'importation est correct

@Component({
  selector: 'app-formulaire-recette',
  templateUrl: './formulaire-recette.component.html',
  styleUrls: ['./formulaire-recette.component.css']
})
export class FormulaireRecetteComponent {
  countryList = countryList;

  selectedCountry: string = ''; // Initialisez avec une valeur par défaut

  Data_enum: any;
  @Input() isAffiched = false; //affiche le 1er formulaire ajotu recette
  isAffichedEtape = false; // affiche le 2eme formulaire ajout recette
  selectedIngredientsString = '';
  selectedIngredients: string[] = []; //stocke les ingrédients sélectionnés
  selectedQuantities: string[] = []; //stocke les quantités sélectionnées

  etapes: string[] = ['']; // stocke les étapes de la recette
  formData: any = {
    NomRecette: '',
    Ingredient: '',
    TempsPrepa: '',
    PaysOrigine: '',
    Favoris: '',
    img: '',
    ProteineType: '',
    GlucideType: '',
    SauceType: '',
    Epices: '',
    IngredientQuantite: '',
    etapes: ''
  };

  onIngredientSelectionChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    console.log(target.value);
    if (this.selectedIngredients.includes(target.value)) {
      this.selectedIngredients.splice(this.selectedIngredients.indexOf(target.value), 1);
      return;
    }
    this.selectedIngredients.push(target.value);
    this.selectedIngredientsString = this.selectedIngredients.join(',');
    console.log(this.selectedIngredientsString);
  }

  constructor(private messageService: MessageService, private http: HttpClient) {
    console.log(countryList);
    this.getEnum();
    console.log('../assets/imagesPays/' + countryList[0].code.toLowerCase() + '.png')



  }
  getEnum() {
    // Appeler la fonction du service pour récupérer les données
    this.messageService.getEnum().subscribe((data: any) => {
      this.Data_enum = data;
      // Vous pouvez maintenant traiter les données ici
      console.log(this.Data_enum); // Afficher les données dans la console

    });
  }

  send_ajout_recette() {


    this.isAffichedEtape = true;
  }

  send_ajout_recette_etape() {




    const concatenatedIngredients: string[] = [];

    for (let i = 0; i < this.selectedIngredients.length; i++) {
      const ingredient = this.selectedIngredients[i];
      const quantity = this.selectedQuantities[i];
      const concatenated = `${ingredient}:${quantity}`;
      concatenatedIngredients.push(concatenated);
    }

    const result = concatenatedIngredients.join('|');
    console.log(result);
    console.log(this.etapes);
    const concatenatedEtape: string[] = [];
    for (let i = 0; i < this.etapes.length; i++) {
      const cpt = (<HTMLInputElement>document.getElementById('etape' + i)).value;
      concatenatedEtape.push(cpt);


    }
    const result2 = concatenatedEtape.join('|');
    console.log(concatenatedEtape);
    const NomRecetteValue = (<HTMLInputElement>document.getElementById('NomRecette')).value;
    const TempsPrepaValue = (<HTMLInputElement>document.getElementById('TempsPreparation')).value;
    const FavorisValue = (<HTMLInputElement>document.getElementById('Favoris')).value;
    const imgValue = (<HTMLInputElement>document.getElementById('link')).value;
    const proteine = (<HTMLSelectElement>document.getElementById('proteine')).value;
    const glucide = (<HTMLSelectElement>document.getElementById('glucide')).value;
    const sauce = (<HTMLSelectElement>document.getElementById('Sauce')).value;
    const epices = (<HTMLSelectElement>document.getElementById('Epice')).value;
    // Attribuez les valeurs aux propriétés de formData
    this.formData.NomRecette = NomRecetteValue;
    this.formData.Ingredient = this.selectedIngredientsString;
    this.formData.TempsPrepa = TempsPrepaValue;
    this.formData.PaysOrigine = this.selectedCountry;
    this.formData.Favoris = FavorisValue;
    this.formData.img = imgValue;
    this.formData.ProteineType = proteine;
    this.formData.GlucideType = glucide;
    this.formData.SauceType = sauce;
    this.formData.Epices = epices;

    this.formData.Favoris = FavorisValue;
    this.formData.IngredientQuantite = result;
    this.formData.etapes = result2;
    console.log(this.formData);
    // Envoyer les données au format JSON
    this.http.post('https://lorenzo-geano-etu.pedaweb.univ-amu.fr/extranet/CuisineLOLO/Ajout_recette.php', this.formData)
      .subscribe(response => {
        // Traiter la réponse ici si nécessaire
        console.log(response);
        // location.reload();
      },
        error => {
          // Gérer les erreurs ici et afficher les détails de l'erreur
          console.error(error.error.text);
          console.error(error);
          // location.reload();
        });

  }


  ajouterEtape() {
    this.etapes.push('');
  }
  // Fonction pour gérer la sélection
  onCountrySelected(value: string) {
    this.selectedCountry = value;
    console.log(this.selectedCountry);
  }

}