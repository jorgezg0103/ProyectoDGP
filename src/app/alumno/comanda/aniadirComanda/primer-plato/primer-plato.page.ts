import { Component, OnInit } from '@angular/core';
import { ComandasService } from '../../../../services/comandas.service'
import {ImageUrlService} from '../../../../services/image-url.service'
import { PaginationSizeBasedService } from '../../../../services/pagination-size-based.service'
import { Router } from '@angular/router'
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-primer-plato',
  templateUrl: './primer-plato.page.html',
  styleUrls: ['./primer-plato.page.scss'],
})
export class PrimerPlatoPage implements OnInit {

  ayudaURL: string;
  homeURL:string;

  listado;
  private opciones=[];
  constructor(private router:Router, private comandaService:ComandasService,private urlService:ImageUrlService, private paginationManager:PaginationSizeBasedService,private http:HttpClient) {
    this.http.get("http://localhost/comandas.php?opcion=1").subscribe(snap => {
      //console.log(snap);
      this.listado = snap;

      for (let lista of this.listado){
        let opcion=
          {
            id:lista.idPrimero,
            nombre:lista.nombre,
            idImagen:lista.idImagen,
            imageURL:''
          };
        this.opciones.push(opcion);
      }

      this.getUrls();
    });

  }

  ngOnInit() {
  }
  getUrls(){
    for (let opcion of this.opciones){
      opcion.imageURL=this.urlService.getUrl(opcion.idImagen,'true',this.urlService.blanco);
    }
    this.ayudaURL=this.urlService.getAyudaURL(this.urlService.morado);
    this.homeURL=this.urlService.getHomeURL('true',this.urlService.blanco);
  }
  seleccionarPrimero(id:number){
    this.comandaService.seleccionarPrimero(id);
    this.router.navigateByUrl('/alumno/comanda/aniadir-comanda');
  }

}
