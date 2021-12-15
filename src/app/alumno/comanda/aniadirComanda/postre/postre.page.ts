import { Component, OnInit } from '@angular/core';
import { ComandasService } from '../../../../services/comandas.service'
import {ImageUrlService} from '../../../../services/image-url.service'
import { PaginationSizeBasedService } from '../../../../services/pagination-size-based.service'
import { Router } from '@angular/router'
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-postre',
  templateUrl: './postre.page.html',
  styleUrls: ['./postre.page.scss'],
})
export class PostrePage implements OnInit {
  listado;
  private opciones=[];
  constructor(private router:Router, private comandaService:ComandasService,private urlService:ImageUrlService, private paginationManager:PaginationSizeBasedService,private http:HttpClient) {
    this.http.get("http://localhost/comandas.php?opcion=3").subscribe(snap => {
      //console.log(snap);
      this.listado = snap;

      for (let lista of this.listado){
        let opcion=
          {
            id:lista.idPostre,
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
      // console.log(opcion.nombre);
      opcion.imageURL=this.urlService.getUrl(opcion.idImagen,'true',this.urlService.blanco);
    }
  }
  seleccionarPostre(id:number){
    this.comandaService.seleccionarPostre(id);
    this.router.navigateByUrl('/alumno/comanda/aniadir-comanda');
  }

  }
