//Nombre de archivo:home.page.ts
//Fichero encargado de dirigir el routing hacia la página principal o al fichero de estilo
//Autor: Jesús López Rodríguez
//Define el modulo de los principales componentes de la página web

import { Component } from '@angular/core';
import { ImageUrlService } from 'src/app/services/image-url.service';
import { PaginationSizeBasedService } from 'src/app/services/pagination-size-based.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  menuURL: string;
  agendaURL: string;
  ayudaURL: string;
  tutorialURL: string;

  private opcionesInputeadas;
  private opciones = [
    {
      id:'1',
      nombre:'MENÚ',
      to:'../menu',
      imageURL:''
    },
    {
      id:'2',
      nombre:'AGENDA',
      to:'../agenda',
      imageURL:''
    },
    {
      id:'3',
      nombre:'TUTORIAL',
      to:'../tutoriales',
      imageURL:''
    }

  ]

  constructor(private urlService:ImageUrlService, private paginationManager:PaginationSizeBasedService)  {
    this.getUrls();
    this.opcionesInputeadas=JSON.stringify(this.opciones);
  }

  ngOnInit(){
  }
  getUrls() {
    this.menuURL=this.urlService.getUrl(32514,'true',this.urlService.naranja);
    this.agendaURL=this.urlService.getUrl(5898,'true',this.urlService.naranja);
    this.tutorialURL=this.urlService.getUrl(26809,'true',this.urlService.naranja);

    this.opciones[0].imageURL=this.menuURL;
    this.opciones[1].imageURL=this.agendaURL;
    this.opciones[2].imageURL=this.tutorialURL;
  }

}
