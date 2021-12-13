//Nombre de archivo:tutoriales.page.ts
//Fichero encargado de dirigirel routing hacia la página principal o al fichero de estilo
//Autor: Miguel Carracedo Rodríguez
//Define el modulo de los principales componentes de la página web

import { Component, OnInit } from '@angular/core';
import { PaginationSizeBasedService } from '../../../services/pagination-size-based.service'
import {ImageUrlService} from '../../../services/image-url.service'

@Component({
  selector: 'app-tutoriales',
  templateUrl: './tutoriales.page.html',
  styleUrls: ['./tutoriales.page.scss'],
})
export class TutorialesPage implements OnInit {

  tutorial1URL : string;
  tutorial2URL : string;
  tutorial3URL : string;
  tutorial4URL : string;

  private opcionesInputeadas;
  private opciones = [
    {
      id: '1',
      nombre: 'Tutorial1',
      to:'',
      descripcion: 'Aqui va el tutorial 1',
      imageURL:''
    },
    {
      id: '2',
      nombre: 'Tutorial2',
      to:'',
      descripcion: 'Aqui va el tutorial 2',
      imageURL:''
    },
    {
      id: '3',
      nombre: 'Tutorial3',
      to:'',
      descripcion: 'Aqui va el tutorial 3',
      imageURL:''
    },
    {
      id: '4',
      nombre: 'Tutorial4',
      to:'',
      descripcion: 'Aqui va el tutorial 4',
      imageURL:''
    }
  ]

  constructor(private urlService:ImageUrlService, private paginationManager:PaginationSizeBasedService) {
    this.getUrls();
    this.opcionesInputeadas=JSON.stringify(this.opciones);
  }

  ngOnInit() {
  }

  getUrls(){
    this.tutorial1URL=this.urlService.getUrl(35175,'true',this.urlService.naranja);
    this.tutorial2URL=this.urlService.getUrl(35175,'true',this.urlService.naranja);
    this.tutorial3URL=this.urlService.getUrl(35175,'true',this.urlService.naranja);
    this.tutorial4URL=this.urlService.getUrl(35175,'true',this.urlService.naranja);
  
    this.opciones[0].imageURL=this.tutorial1URL;
    this.opciones[1].imageURL=this.tutorial2URL;
    this.opciones[2].imageURL=this.tutorial3URL;
    this.opciones[3].imageURL=this.tutorial4URL;
  }

}
