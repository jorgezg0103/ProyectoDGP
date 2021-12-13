//Nombre de archivo:home.page.ts
//Fichero encargado de dirigir el routing hacia la página principal o al fichero de estilo
//Autor: Laura Ortiz González, Jorge Zamudio Gutiérrez
//Define el modulo de los principales componentes de la página web

import { Component, OnInit } from '@angular/core';
import { ImageUrlService } from 'src/app/services/image-url.service';
import { PaginationSizeBasedService } from 'src/app/services/pagination-size-based.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  pagina_actual: number = 1;

  microondasURL: string;
  comandaURL: string;

  private opcionesInputeadas;
  private opciones = [
    {
      id: '1',
      nombre: 'Poner el microondas',
      to:'',
      imageURL: '',
    },
    {
      id: '2',
      nombre: 'Tomar comanda comedor',
      to:'',
      imageURL: '',
    },

  ]

  constructor(private urlService:ImageUrlService, private paginationManager:PaginationSizeBasedService)  {
    this.getUrls();
    this.opcionesInputeadas=JSON.stringify(this.opciones);
  }

  ngOnInit(){
  }
  getUrls() {
    this.microondasURL=this.urlService.getUrl(2473,'true',this.urlService.naranja);
    this.comandaURL=this.urlService.getUrl(7142,'true',this.urlService.naranja);

    this.opciones[0].imageURL=this.microondasURL;
    this.opciones[1].imageURL=this.comandaURL;
  }

}
