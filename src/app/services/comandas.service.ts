import { Injectable } from '@angular/core';
import {ImageUrlService} from './image-url.service';

@Injectable({
  providedIn: 'root'
})
export class ComandasService {
  private comandasTomadas = [
    {
      id:1,
      alumno:'Pepita',
      fotoalumno:'https://cdn-icons-png.flaticon.com/512/616/616430.png',
      primero:'',
      segundo:'',
      postre:''
    },
    {
      id:2,
      alumno:'Juan',
      fotoalumno:'https://cdn0.iconfinder.com/data/icons/flowers-and-leaves/47/flower_9-512.png',
      primero:'',
      segundo:'',
      postre:''
    }

  ];
  constructor(private urlService:ImageUrlService) {
    this.getUrls();
  }

  getComandas(){
    return this.comandasTomadas;
  }
  private getUrls(){
    this.comandasTomadas[0].primero=this.urlService.getUrl(2448,'true',this.urlService.blanco);
    this.comandasTomadas[0].segundo=this.urlService.getUrl(29195,'true',this.urlService.blanco);
    this.comandasTomadas[0].postre=this.urlService.getUrl(2420,'true',this.urlService.blanco);

    this.comandasTomadas[1].primero=this.urlService.getUrl(2448,'true',this.urlService.blanco);
    this.comandasTomadas[1].segundo=this.urlService.getUrl(29195,'true',this.urlService.blanco);
    this.comandasTomadas[1].postre=this.urlService.getUrl(2420,'true',this.urlService.blanco);
  }
  aniadirComanda(nombreAlumno:string,foto:string,idPrimero,idSegundo,idPostre){
    var nuevaComanda={
      id:this.comandasTomadas.length+1,
      alumno:nombreAlumno,
      fotoalumno:foto,
      primero:this.urlService.getUrl(idPrimero,'true',this.urlService.blanco),
      segundo:this.urlService.getUrl(idSegundo,'true',this.urlService.blanco),
      postre:this.urlService.getUrl(idPostre,'true',this.urlService.blanco)
    };
    this.comandasTomadas.push(nuevaComanda);
  }

}
