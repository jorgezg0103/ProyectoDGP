//Nombre de archivo:menu.page.ts
//Fichero encargado de dirigirel routing hacia la página principal o al fichero de estilo
//Autor: Laura Ortiz González
//Define el modulo de los principales componentes de la página web

import { Component, OnInit } from '@angular/core';
import {ImageUrlService} from '../../../services/image-url.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  primerPlatoURL: string;
  segundoPlatoURL: string;
  postreURL: string;
  private opcionesInputeadas;
  private opciones = [
    {
      id:'1',
      nombre:'PRIMER PLATO',
      to:'../menu',
      imageURL:''
    },
    {
      id:'2',
      nombre:'SEGUNDO PLATO',
      to:'../agenda',
      imageURL:''
    },
    {
      id:'3',
      nombre:'POSTRE',
      to:'../agenda',
      imageURL:''
    }
]
  constructor(private urlService:ImageUrlService) {
    this.getUrls();
    this.opcionesInputeadas=JSON.stringify(this.opciones);
  }

  ngOnInit() {
  }

  getUrls(){
    this.primerPlatoURL=this.urlService.getUrl(7219,'true',this.urlService.naranja);
    this.segundoPlatoURL=this.urlService.getUrl(7240,'true',this.urlService.naranja);
    this.postreURL=this.urlService.getUrl(7216,'true',this.urlService.naranja);

    this.opciones[0].imageURL=this.primerPlatoURL;
    this.opciones[1].imageURL=this.segundoPlatoURL;
    this.opciones[2].imageURL=this.postreURL;
  }
}
