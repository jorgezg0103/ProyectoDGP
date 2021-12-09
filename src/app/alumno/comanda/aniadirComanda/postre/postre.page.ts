import { Component, OnInit } from '@angular/core';
import { ComandasService } from '../../../../services/comandas.service'
import {ImageUrlService} from '../../../../services/image-url.service'
import { PaginationSizeBasedService } from '../../../../services/pagination-size-based.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-postre',
  templateUrl: './postre.page.html',
  styleUrls: ['./postre.page.scss'],
})
export class PostrePage implements OnInit {

  private opciones = [
    {
      id:11382,
      nombre:'HELADO',
      imageURL:''
    },
    {
      id:28339,
      nombre:'FRUTA',
      imageURL:''
    },
    {
      id:2618,
      nombre:'YOGUR',
      imageURL:''
    },
    {
      id:35423,
      nombre:'TARTA',
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
  seleccionarPostre(id:number){
    this.comandaService.seleccionarPostre(id);
    this.router.navigateByUrl('/alumno/comanda/aniadir-comanda');
  }

  }
