//Nombre de archivo:inicio.page.ts
//Fichero encargado de dirigirel routing hacia la página principal o al fichero de estilo
//Autor: Alejandro Soriano Morante
//Define el modulo de los principales componentes de la página web

import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  listadoP;
  constructor(public navCtrl: NavController, private http:HttpClient) { 
    this.http.get("http://localhost/profesores.php?opcion=1").subscribe(snap => {
      console.log(snap);
      this.listadoP = snap;
    });

  }

  ngOnInit() {
  }

}
