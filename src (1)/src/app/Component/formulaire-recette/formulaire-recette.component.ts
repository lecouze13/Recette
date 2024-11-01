import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from '../../message.service';
import { HttpClient } from '@angular/common/http';
import { countryList } from './country-list'; // Assurez-vous que le chemin d'importation est correct
import { MatLabel } from '@angular/material/form-field';
@Component({
  selector: 'app-formulaire-recette',
  templateUrl: './formulaire-recette.component.html',
  styleUrls: ['./formulaire-recette.component.css'],
})
export class FormulaireRecetteComponent {
  @Input() mymodel!: String;
  @Input() searchText!: String;

  @Output() close_formulaire = new EventEmitter<boolean>();
  isFormulaireOpen = false;

  countryList = countryList;

  selectedCountry: string = ''; // Initialisez avec une valeur par défaut
  selectedFile!: File;

  Data_enum: any;
  DFiltered: any;

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
    etapes: '',
    Portion: '',
    Note: '',
    TempsCuisson: '',
    idUser: 2,
  };

  onIngredientSelectionChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    console.log(target.value);
    if (this.selectedIngredients.includes(target.value)) {
      this.selectedIngredients.splice(
        this.selectedIngredients.indexOf(target.value),
        1
      );
      return;
    }
    this.selectedIngredients.push(target.value);
    this.selectedIngredientsString = this.selectedIngredients.join(',');
    console.log(this.selectedIngredientsString);
  }

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {
    console.log(countryList);

    this.getEnum();
    console.log(
      '../assets/imagesPays/' + countryList[0].code.toLowerCase() + '.png'
    );
  }
  getEnum() {
    // Appeler la fonction du service pour récupérer les données
    this.messageService.getEnum().subscribe((data: any) => {
      console.log(data);
      this.DFiltered = data;

      this.DFiltered.GlucideType.sort();
      this.DFiltered.ProteineType.sort();
      this.DFiltered.SauceType.sort();
      this.DFiltered.Type.sort();
    });
    this.messageService.getEnum().subscribe((test: any) => {
      this.Data_enum = test;
      this.Data_enum.GlucideType.sort();
      this.Data_enum.ProteineType.sort();
      this.Data_enum.SauceType.sort();
      this.Data_enum.Type.sort();
    });
  }

  send_ajout_recette() {
    const NomRecetteValue = (<HTMLInputElement>(
      document.getElementById('NomRecette')
    )).value;
    const TempsPrepaValue = (<HTMLInputElement>(
      document.getElementById('TempsPreparation')
    )).value;
    const TempsCuisson = (<HTMLInputElement>(
      document.getElementById('TempsCuisson')
    )).value;
    const Note = (<HTMLInputElement>document.getElementById('Note')).value;
    const Portion = (<HTMLInputElement>document.getElementById('Portion'))
      .value;

    const FavorisValue = (<HTMLInputElement>document.getElementById('Favoris'))
      .value;
    const imgValue = (<HTMLInputElement>document.getElementById('link')).value;
    const proteine = (<HTMLSelectElement>document.getElementById('proteine'))
      .value;
    const glucide = (<HTMLSelectElement>document.getElementById('glucide'))
      .value;
    const sauce = (<HTMLSelectElement>document.getElementById('Sauce')).value;
    const epices = (<HTMLSelectElement>document.getElementById('Epice')).value;
    if (
      NomRecetteValue != '' &&
      TempsPrepaValue !== '' &&
      TempsCuisson !== '' &&
      Note !== '' &&
      Portion !== '' &&
      this.selectedFile.name !== ''
    ) {
      console.log(NomRecetteValue);
      console.log(TempsPrepaValue);
      // Mettez ici d'autres actions que vous souhaitez exécuter si toutes les valeurs sont différentes de null
      this.isAffichedEtape = true;
    } else {
      // Si l'une des valeurs est null, ne définissez pas isAffichedEtape à true
      console.log('Une ou plusieurs valeurs sont null.');
      console.log(NomRecetteValue);
      console.log(TempsPrepaValue);
      console.log(TempsCuisson);
      console.log(Note);
      console.log(Portion);
      console.log(imgValue);
    }
  }
  close_formulaire_recette() {
    this.isFormulaireOpen = true;
    this.close_formulaire.emit(true);
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
      const cpt = (<HTMLInputElement>document.getElementById('etape' + i))
        .value;
      concatenatedEtape.push(cpt);
    }
    const result2 = concatenatedEtape.join('|');
    console.log(concatenatedEtape);
    const NomRecetteValue = (<HTMLInputElement>(
      document.getElementById('NomRecette')
    )).value;
    const TempsPrepaValue = (<HTMLInputElement>(
      document.getElementById('TempsPreparation')
    )).value;
    const TempsCuisson = (<HTMLInputElement>(
      document.getElementById('TempsCuisson')
    )).value;
    const Note = (<HTMLInputElement>document.getElementById('Note')).value;
    const Portion = (<HTMLInputElement>document.getElementById('Portion'))
      .value;

    const FavorisValue = (<HTMLInputElement>document.getElementById('Favoris'))
      .value;
    const imgValue =this.selectedFile.name
    const proteine = (<HTMLSelectElement>document.getElementById('proteine'))
      .value;
    const glucide = (<HTMLSelectElement>document.getElementById('glucide'))
      .value;
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
    this.formData.Note = Note;
    this.formData.TempsCuisson = TempsCuisson;
    this.formData.Portion = Portion;
    console.log(this.formData);
    //Envoyer les données au format JSON
    this.http
      .post(
        'https://lorenzo-geano-etu.pedaweb.univ-amu.fr/extranet/CuisineLOLO/Ajout_recette.php',
        this.formData
      )
      .subscribe(
        (response) => {
          if ((response == "Problème d'indentifications du token jwt")) {
            alert('Erreur vous allez être déconnecté');
            window.location.href = './login';
          }
          console.log(response);
          // location.reload();
        },
        (error) => {
          // Gérer les erreurs ici et afficher les détails de l'erreur
          console.error(error.error.text);
          console.error(error);
          // location.reload();
        }
      );
    const formData = new FormData();
    formData.append('file', this.selectedFile);

    fetch(
      'https://lorenzo-geano-etu.pedaweb.univ-amu.fr/extranet/CuisineLOLO/ImgRecette.php',
      {
        method: 'POST',
        body: formData,
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de l'envoi du fichier.");
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fichier envoyé avec succès:', data);
      })
      .catch((error) => {
        console.log(error);
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

  valuechange(newValue: any) {
    //this.Data_enum.Ingredient = this.DFiltered.Ingredient;
    // if (newValue === '') {
    //   this.DFiltered = this.Data_enum;
    // }

    this.mymodel = newValue;
    // console.log(this.Data_enum.Ingredient)
    // console.log(this.mymodel.toLowerCase())
    this.DFiltered.Ingredient = this.Data_enum.Ingredient.filter(
      (elt: any) => elt.toLowerCase().indexOf(this.mymodel.toLowerCase()) > -1
    );
  }
  imageUrl: string | ArrayBuffer | null = null;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)
    // const reader = new FileReader();
    // reader.onload = (e: any) => {
    //   this.imageUrl = e.target.result;
    // };
    // reader.readAsDataURL(this.selectedFile);
    // console.log(this.selectedFile)
  }

  // VerifNote()
  // {    const Note = (<HTMLInputElement>document.getElementById('Note')).value;

  //   console.log(Note)

  // }
}
