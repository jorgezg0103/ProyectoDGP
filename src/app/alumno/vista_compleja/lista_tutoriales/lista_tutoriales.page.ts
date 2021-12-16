import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";

import { ObtenerNombreService } from 'src/app/services/obtener-nombre.service';

@Component({
  selector: 'app-lista_tutoriales',
  templateUrl: './lista_tutoriales.page.html',
  styleUrls: ['./lista_tutoriales.page.scss'],
})
export class Lista_tutorialesPage implements OnInit {
  listadoT;

  constructor(public navCtrl: NavController, private http:HttpClient, private nombreService: ObtenerNombreService) {
    
    this.http.get("http://localhost/tutoriales.php?opcion=4&nombre="+nombreService.getNombre()).subscribe(snap => {
      console.log(snap);
      this.listadoT = snap;
    });
    
  }

  ngOnInit() {
  }

  
}