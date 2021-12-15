//Nombre de archivo:inicio.page.ts
//Fichero encargado de dirigirel routing hacia la página principal o al fichero de estilo
//Autor: Alejandro Soriano Morante
//Define el modulo de los principales componentes de la página web

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";
import { Profesor } from './class_profesor';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  profesor = new Profesor("","","","","");
  tutoriales;

  constructor(public navCtrl: NavController, private http:HttpClient) { }

  ngOnInit() {
  }

  aniadir_profesor(){
    this.http.get("http://localhost/profesores.php?opcion=2&usuario="+this.profesor.usuario+"&dni="+this.profesor.dni+"&nombre="+this.profesor.nombre+"&apellidos="+this.profesor.apellidos+"&email="+this.profesor.email).subscribe(snap => {
      console.log(snap);
      this.tutoriales = snap;
    });
  }

}
