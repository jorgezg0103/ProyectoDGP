import { Injectable } from '@angular/core';
import {ImageUrlService} from './image-url.service';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ComandasService {
  private primero:number=0;
  private segundo:number =0;
  private postre:number=0;
  private alumno='';
  private listado;
  private comandasTomadas = [];
  constructor(private urlService:ImageUrlService,private http:HttpClient) {
    this.http.get("http://localhost/comandas.php?opcion=4").subscribe(snap => {
      //console.log(snap);
      this.listado = snap;

      for (let lista of this.listado){
        let opcion=
          {
            id:lista.idComanda,
            nombre:lista.usuario,
            fotoalumno:'',
            primero:lista.primero,
            segundo:lista.segundo,
            postre:lista.postre
          };
        this.comandasTomadas.push(opcion);
      }
      
      this.getUrls();
    });

  }

  getComandas(){
    return this.comandasTomadas;
  }
  private getUrls(){
    // this.comandasTomadas[0].primero=this.urlService.getUrl(2448,'true',this.urlService.blanco);
    // this.comandasTomadas[0].segundo=this.urlService.getUrl(29195,'true',this.urlService.blanco);
    // this.comandasTomadas[0].postre=this.urlService.getUrl(2420,'true',this.urlService.blanco);
    //
    // this.comandasTomadas[1].primero=this.urlService.getUrl(2448,'true',this.urlService.blanco);
    // this.comandasTomadas[1].segundo=this.urlService.getUrl(29195,'true',this.urlService.blanco);
    // this.comandasTomadas[1].postre=this.urlService.getUrl(2420,'true',this.urlService.blanco);
  }
  aniadirComanda(){
    var conseguido=true;
    if(this.primero!=0 && this.segundo!=0 && this.postre!=0){
    } else{
      conseguido=false;
    }
    return conseguido;
  }
  aniadirUsuario(nombreAlumno:string,foto:string){
    this.alumno=nombreAlumno;
    if(this.alumno!=''){
      this.http.get("http://localhost/comandas.php?opcion=0&primero="+this.primero+"&segundo="+this.segundo+"&postre="+this.postre+"&alumno="+this.alumno).subscribe(snap => {
        console.log(snap);
      });
    }

  }

  seleccionarPrimero(id:number){
    this.primero=id;
  }
  seleccionarSegundo(id:number){
    this.segundo=id;
  }
  seleccionarPostre(id:number){
    this.postre=id;
  }
  seleccionarAlumno(username){
    this.alumno=username;
  }

}
