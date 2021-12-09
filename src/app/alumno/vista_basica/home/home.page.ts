//Nombre de archivo:home.page.ts
//Fichero encargado de dirigirel routing hacia la página principal o al fichero de estilo
//Autor: Miguel Carracedo Rodríguez
//Define el modulo de los principales componentes de la página web

import { Component, OnInit } from '@angular/core';
//import { AppComponent } from '../../../app.component'
import {ImageUrlService} from '../../../services/image-url.service'
import { PaginationSizeBasedService } from '../../../services/pagination-size-based.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  menuURL: string;
  agendaURL: string;
  ayudaURL: string;

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
    this.ayudaURL=this.urlService.getAyudaURL(this.urlService.morado);

    this.opciones[0].imageURL=this.menuURL;
    this.opciones[1].imageURL=this.agendaURL;
  }


}
