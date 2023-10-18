import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from '../services.service';

import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  Boolean_CreationCompteC: boolean;
  Boolean_CreationCompteRH: boolean;
  Boolean_loginRH: boolean;
  Boolean_loginC: boolean;
  is_afficher_Login: any;
  constructor() {
    this.Boolean_loginC = false;
    this.Boolean_loginRH = false;
    this.is_afficher_Login = false;

    this.Boolean_CreationCompteC = false;
    this.Boolean_CreationCompteRH = false;
  }
  loginC() {


    this.Boolean_loginC = true
    this.Boolean_CreationCompteRH = false
    this.Boolean_CreationCompteC = false
    this.Boolean_loginRH = false;
    this.is_afficher_Login = true;
  }
  loginRH() {
    this.Boolean_loginC = false
    this.Boolean_CreationCompteRH = false
    this.Boolean_CreationCompteC = false
    this.Boolean_loginRH = true;
    this.is_afficher_Login = true;
  }
  CreationCompteC() {

    this.Boolean_loginC = false
    this.Boolean_CreationCompteRH = false
    this.Boolean_CreationCompteC = true
    this.Boolean_loginRH = false;
    this.is_afficher_Login = true;
  }
  CreationCompteRH() {
    this.Boolean_loginC = false
    this.Boolean_CreationCompteRH = true
    this.Boolean_CreationCompteC = false
    this.Boolean_loginRH = false;
    this.is_afficher_Login = true;


  }





}