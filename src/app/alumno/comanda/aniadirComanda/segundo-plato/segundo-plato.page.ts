import { Component, OnInit } from '@angular/core';
import { ComandasService } from '../../../../services/comandas.service'
import {ImageUrlService} from '../../../../services/image-url.service'
import { PaginationSizeBasedService } from '../../../../services/pagination-size-based.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-segundo-plato',
  templateUrl: './segundo-plato.page.html',
  styleUrls: ['./segundo-plato.page.scss'],
})
export class SegundoPlatoPage implements OnInit {
  private opciones = [
    {
      id:3020,
      nombre:'CROQUETAS',
      imageURL:''
    },
    {
      id:29195,
      nombre:'POLLO CON PATATAS',
      imageURL:''
    },
    {
      id:6646,
      nombre:'MERLUZA EN SALSA',
      imageURL:''
    },
    {
      id:36999,
      nombre:'MILANESA DE CERDO',
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
  }
  seleccionarSegundo(id:number){
    this.comandaService.seleccionarSegundo(id);
    this.router.navigateByUrl('/alumno/comanda/aniadir-comanda');
  }

}
