import { Component, OnInit } from '@angular/core';
import {ImageUrlService} from '../../../services/image-url.service'
import { PaginationSizeBasedService } from '../../../services/pagination-size-based.service'
import { ComandasService } from '../../../services/comandas.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-aniadir-comanda',
  templateUrl: './aniadir-comanda.page.html',
  styleUrls: ['./aniadir-comanda.page.scss'],
})
export class AniadirComandaPage implements OnInit {
  pagina_actual: number = 1;
  itemsPerPage: number =2;

  primerPlatoURL: string;
  segundoPlatoURL: string;
  postreURL: string;
  ayudaURL: string;
  homeURL:string;

  private opciones = [
    {
      id:'1',
      nombre:'PRIMER PLATO',
      to:'./primer-plato',
      imageURL:''
    },
    {
      id:'2',
      nombre:'SEGUNDO PLATO',
      to:'./segundo-plato',
      imageURL:''
    },
    {
      id:'3',
      nombre:'POSTRE',
      to:'./postre',
      imageURL:''
    }
]
  constructor(private router:Router, private comandaService:ComandasService,private urlService:ImageUrlService, private paginationManager:PaginationSizeBasedService) {
    this.getUrls();
  }

  ngOnInit() {
    this.itemsPerPage=this.paginationManager.adjustPagination(this.opciones.length);

  }

  getUrls(){
    this.primerPlatoURL=this.urlService.getUrl(7219,'true',this.urlService.naranja);
    this.segundoPlatoURL=this.urlService.getUrl(7240,'true',this.urlService.naranja);
    this.postreURL=this.urlService.getUrl(7216,'true',this.urlService.naranja);

    this.ayudaURL=this.urlService.getAyudaURL(this.urlService.morado);
    this.homeURL=this.urlService.getHomeURL('true',this.urlService.blanco);

    this.opciones[0].imageURL=this.primerPlatoURL;
    this.opciones[1].imageURL=this.segundoPlatoURL;
    this.opciones[2].imageURL=this.postreURL;
  }
  pulsarBoton(){
    this.comandaService.aniadirComanda('Antonio','https://cdn-icons-png.flaticon.com/512/119/119647.png',
                    2448,2448,2448);
    this.router.navigateByUrl('/alumno/comanda');
  }
}
