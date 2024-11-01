import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-error-form',
  templateUrl: './error-form.component.html',
  styleUrls: ['./error-form.component.css']
})
export class ErrorFormComponent {
 isClosed :boolean
@Input() message !:string
 constructor()
 {
  this.isClosed=false
 }
 close_error()
 {
  this.isClosed=true
 }
}
