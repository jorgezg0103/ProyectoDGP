import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";
import { ComandasService } from '../../../../services/comandas.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {
  listado;

  constructor(public navCtrl: NavController, private http:HttpClient, private router:Router, private comandaService:ComandasService) {

    this.http.get("http://localhost/alumnos.php?opcion=1").subscribe(snap => {
      console.log(snap);
      this.listado = snap;
    });

  }

  ngOnInit() {
  }
  seleccionarAlumno(usuario){
    this.comandaService.aniadirUsuario(usuario,'https://cdn.icon-icons.com/icons2/1364/PNG/512/flowersilhouette_89141.png');
    this.router.navigate(['/alumno/comanda']).then(() =>{
      window.location.reload();
    });
  }
}
