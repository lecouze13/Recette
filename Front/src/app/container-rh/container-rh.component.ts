import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-container-rh',
  templateUrl: './container-rh.component.html',
  styleUrls: ['./container-rh.component.css']
})
export class ContainerRHComponent {


  donnee_array: any = {};

  data_array: any[] = [];

  data_arrayCongeValider: any[] = [];

  displayedColumns: string[] = ['nom', 'prenom', 'nombreJoursDemande', 'status', 'Valider letat'];

  displayedColumnsCongeValider: string[] = ['intituleConge', 'nombreJours'];

  constructor(private http: HttpClient, private service: ServicesService) {



  }

  validerDemande(codeCollab: string, codeConge: string) {
    this.service.changedemandestatus(codeCollab, codeConge).subscribe(




    );
    alert("Demande validée");
  }



  refuserDemande(codeCollab: string, codeConge: string) {
    this.service.changedemandestatusRefus(codeCollab, codeConge).subscribe();
    alert("Demande refusée");





  }


  ngOnInit() {

    this.service.CongeValider().subscribe((data: any) => {
      console.log(data);

      this.data_arrayCongeValider = data;


    },
      (error: any) => {
        console.log(error);
      });


    this.service.getDemandeConge()
      .subscribe((data: any) => {
        console.log(data);

        this.data_array = data;


      },
        (error: any) => {
          console.log(error);
        });


  }
}
