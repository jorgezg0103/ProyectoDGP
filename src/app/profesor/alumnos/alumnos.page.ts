//Nombre de archivo: alumnos.page.ts
//Fichero encargado de dirigir el routing hacia la página principal o al fichero de estilo
//Autor: Alejandro Soriano Morante
//Define el modulo de los principales componentes de la página web

import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {
  listado;

  constructor(public navCtrl: NavController, private http:HttpClient) {

    this.http.get("http://localhost/alumnos.php?opcion=1").subscribe(snap => {
      console.log(snap);
      this.listado = snap;
    });

  }

  ngOnInit() {
  }

}
