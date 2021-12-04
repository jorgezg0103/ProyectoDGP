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
  pagina_actual: number = 1;
  itemsPerPage: number =2;
  naranja='ff9800';
  morado='FDA1FF';
  menuURL: string;
  agendaURL: string;
  ayudaURL: string;

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
    //this.itemsPerPage=this.getItemsPerPage();
  }

  ngOnInit(){
    this.itemsPerPage=this.paginationManager.adjustPagination(this.opciones.length);
  }
  getUrls() {
    this.menuURL=this.urlService.getUrl(32514,'true',this.naranja);
    this.agendaURL=this.urlService.getUrl(5898,'true',this.naranja);
    this.ayudaURL=this.urlService.getUrl(7171,'true',this.morado);

    this.opciones[0].imageURL=this.menuURL;
    this.opciones[1].imageURL=this.agendaURL;
  }


}
