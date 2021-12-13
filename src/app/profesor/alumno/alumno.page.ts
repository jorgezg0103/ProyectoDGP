//Nombre de archivo:alumno.page.ts
//Fichero encargado de dirigirel routing hacia la página principal o al fichero de estilo
//Autor: Jose Melguizo Ruano
//Define el modulo de los principales componentes de la página web

/*import { Component } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: 'alumno.page.html',
  styleUrls: ['alumno.page.scss'],
})
export class AlumnoPage {

  constructor() {}

}*/

import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {
  id = null;
  listado;

  constructor(public navCtrl: NavController, private http:HttpClient, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.http.get("http://localhost/alumnos.php?opcion=2&usuario="+this.id).subscribe(snap => {
      console.log(snap);
      this.listado = snap;
    });
    
  }

  ngOnInit() {
  }

}
