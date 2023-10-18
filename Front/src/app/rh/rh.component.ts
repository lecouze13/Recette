import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ServicesService } from "../services.service";
@Component({
  selector: 'app-rh',
  templateUrl: './rh.component.html',
  styleUrls: ['./rh.component.css']
})
export class RHComponent {

  tabCollaborarteur: boolean;

  donnee_array: any = {};

  data_array: any[] = [];



  displayedColumns: string[] = ['codeCollab', 'nom', 'prenom'];

  constructor(private http: HttpClient, private service: ServicesService) {
    this.tabCollaborarteur = false;


  }
  ngOnInit() {


    this.service.loginCollaborateurRH()
      .subscribe((data) => {
        console.log(data);

        this.data_array = data;


      },
        (error) => {
          console.log(error);
        });


  }


  test(n: any) {
    this.donnee_array = this.data_array[n - 1];
    console.log(this.donnee_array.codeCollab)

    this.tabCollaborarteur = true;

  }
  retour_arriere() {

    location.reload();
  }




}