import { Component, Input } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  data_array: any[] = [];
  data_arrayCongeValider: any[] = [];

  @Input() codeCollaborateur: any
  @Input() nomC: any
  @Input() prenomC: any
  TodayDate: Date = new Date();
  dateSelectionnee1: Date;
  dateSelectionnee2: Date;
  isLogin: Boolean

  displayedColumns: string[] = ['codeCollab', 'nombreJoursDemande', 'status'];
  displayedColumnsCongeValider: string[] = ['intituleConge', 'nombreJours'];

  constructor(private services: ServicesService) {
    this.dateSelectionnee1 = new Date();
    this.dateSelectionnee2 = new Date();
    this.isLogin = false

  }

  submitForm = () => {
    const dateToday = this.TodayDate.getTime()

    const dateConge1String = this.dateSelectionnee1;
    const dateConge1 = new Date(dateConge1String)
    const dateConge1time = dateConge1.getTime();
    console.log(dateConge1)

    const dateConge2String = this.dateSelectionnee2;
    const dateConge2 = new Date(dateConge2String)

    console.log(dateConge2)
    const dateConge2time = dateConge2.getTime();


    const diff = dateConge2time - dateConge1time;
    const nombreJoursdemande = diff / (1000 * 3600 * 24); // Convertir la différence en millisecondes en jours


    console.log(nombreJoursdemande + 1)


    let currentDate = new Date(dateConge1);
    let countWeekdays = 0;

    while (currentDate <= dateConge2) {
      const dayOfWeek = currentDate.getDay(); // 0 (dimanche) à 6 (samedi)

      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        countWeekdays++;
      }

      currentDate.setDate(currentDate.getDate() + 1); // Passer au jour suivant
    }

    console.log("Nombre de jours ouvrables entre dateConge1 et dateConge2 :", countWeekdays);
    if (dateConge1time > dateToday && dateConge2time > dateToday) {
      alert("dates correcte envoie a la base de donnée")
      console.log(dateConge1String)
      console.log(dateConge2String)

      console.log(this.codeCollaborateur)
      this.services.DemandeConge(this.codeCollaborateur, countWeekdays).subscribe(
        (response) => {
          // Traitement des données de réponse ici
          alert("demande de conge effectué")
        },
        (error) => {
          // Gestion des erreurs
          console.error("Une erreur s'est produite :", error);
        }
      );

    }
    else {
      alert("Une ou les deux  dates selectionnées est déja passé")
    }




  }
  ngOnInit() {



    this.services.CongeValider().subscribe((data: any) => {
      console.log(this.nomC);
      console.log(this.prenomC);

      if (data && data.length > 0) {
        this.data_arrayCongeValider = data.filter((item: any) => {
          const str = item.intituleConge;
          if (str) {
            const parts = str.split(" ");
            const nomT = parts[1];
            const prenomT = parts[2];

            return nomT === this.nomC && prenomT === this.prenomC;
          }
          return false;
        });
        console.log(this.data_arrayCongeValider);
      }
    });


    this.services.GetcongeByiDUrl(this.codeCollaborateur)
      .subscribe((data: any) => {
        console.log(data);

        this.data_array = data;


      },
        (error: any) => {
          console.log(error);
        });


  }


}
