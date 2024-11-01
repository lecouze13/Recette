import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from '../../message.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-formulaire-ingredient',
  templateUrl: './formulaire-ingredient.component.html',
  styleUrls: ['./formulaire-ingredient.component.css'],
})
export class FormulaireIngredientComponent {
  Data_enum: any;
  @Input() isAffichedIngredient = false;
  @Output() close_formulaire2 = new EventEmitter<boolean>();
  isFormulaireOpen = false;

  formData: any = {
    NomIngredient: '',
    Type: '',
    kcal: '',
  };
  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {
    this.getEnum();
    http.get('https://flagcdn.com/fr/codes.json').subscribe((data: any) => {
      console.log(data);
    });
  }
  close_formulaire_recette() {
    this.isFormulaireOpen = true;
    this.close_formulaire2.emit(true);

  }
  getEnum() {
    // Appeler la fonction du service pour récupérer les données
    this.messageService.getEnum().subscribe((data: any) => {
      if ((data == "Problème d'indentifications du token jwt")) {
        alert('Erreur vous allez être déconnecté');
        window.location.href = './login';
      }
      this.Data_enum = data;
      // Vous pouvez maintenant traiter les données ici
      console.log(this.Data_enum); // Afficher les données dans la console
    });
  }

  send_ajout_ingredient() {
    const NomIngredient = (<HTMLInputElement>(
      document.getElementById('NomIngredient')
    )).value;
    const Type = (<HTMLSelectElement>document.getElementById('Type')).value;
    const kcal = (<HTMLInputElement>document.getElementById('calorie')).value;
    // Attribuez les valeurs aux propriétés de formData
    this.formData.NomIngredient = NomIngredient;
    this.formData.Type = Type;
    this.formData.kcal = kcal;

    console.log(this.formData);
    // Envoyer les données au format JSON
    this.http
      .post(
        'https://lorenzo-geano-etu.pedaweb.univ-amu.fr/extranet/CuisineLOLO/ajout_ingredient.php',
        this.formData
      )
      .subscribe(
        (response) => {
          if ((response == "Problème d'indentifications du token jwt")) {
            alert('Erreur vous allez être déconnecté');
            window.location.href = './login';
          }
          console.log(response);
          location.reload();
        },
        (error) => {
          // Gérer les erreurs ici et afficher les détails de l'erreur
          console.error(error.error.text);
          location.reload();
        }
      );
  }
}
