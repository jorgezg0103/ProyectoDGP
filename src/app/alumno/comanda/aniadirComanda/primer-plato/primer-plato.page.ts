import { Component, OnInit } from '@angular/core';
import { ComandasService } from '../../../../services/comandas.service'
import {ImageUrlService} from '../../../../services/image-url.service'
import { PaginationSizeBasedService } from '../../../../services/pagination-size-based.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-primer-plato',
  templateUrl: './primer-plato.page.html',
  styleUrls: ['./primer-plato.page.scss'],
})
export class PrimerPlatoPage implements OnInit {

  ayudaURL: string;
  homeURL:string;

  private opciones = [
    {
      id:2448,
      nombre:'LENTEJAS',
      imageURL:''
    },
    {
      id:2377,
      nombre:'ENSALADA',
      imageURL:''
    },
    {
      id:37204,
      nombre:'ENSALADA DE PASTA',
      imageURL:''
    },
    {
      id:16049,
      nombre:'CALDO DE POLLO',
      imageURL:''
    }
  ]
  constructor(private router:Router, private comandaService:ComandasService,private urlService:ImageUrlService, private paginationManager:PaginationSizeBasedService) {
    this.getUrls();
  }

  ngOnInit() {
  }
  getUrls(){
    for (let opcion of this.opciones){
      opcion.imageURL=this.urlService.getUrl(opcion.id,'true',this.urlService.blanco);
    }
    this.ayudaURL=this.urlService.getAyudaURL(this.urlService.morado);
    this.homeURL=this.urlService.getHomeURL('true',this.urlService.blanco);
  }
  seleccionarPrimero(){

  }

}
