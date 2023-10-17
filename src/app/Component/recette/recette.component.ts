import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css']
})
export class RecetteComponent implements OnInit {
  recetteId!: string; // Variable pour stocker l'ID de la recette récupéré

  recette: any; // Propriété pour stocker les données de la recette

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    // Utilisez ActivatedRoute pour obtenir les paramètres de l'URL, y compris l'ID de la recette
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.recetteId = id;

        // Créez un objet JSON pour envoyer l'ID
        const requestData = { id: id };

        this.http.post('https://lorenzo-geano-etu.pedaweb.univ-amu.fr/extranet/CuisineLOLO/detailRecette.php', requestData)
          .subscribe(response => {
            // Sauvegardez les données de la recette dans la propriété 'recette'
            this.recette = response;
            console.log(this.recette);
          },
            error => {
              // Gérer les erreurs ici et afficher les détails de l'erreur
              console.error(error.error.text);
              console.error(error);
            });
      }
    });
  }
}

