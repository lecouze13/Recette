import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent {

   Recommendation="Recommendation"

   GoToPAGELogin()
   {
     window.location.href="./login"

   }
}
