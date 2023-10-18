import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  data: any;

  constructor(private http: HttpClient) { }



  getData() {
    return this.http.get('https://lorenzo-geano-etu.pedaweb.univ-amu.fr/extranet/CuisineLOLO/');
  }
  getEnum() {
    return this.http.get('https://lorenzo-geano-etu.pedaweb.univ-amu.fr/extranet/CuisineLOLO/getInfo.php');
  }
}

