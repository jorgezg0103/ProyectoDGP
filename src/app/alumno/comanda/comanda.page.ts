import { Component, OnInit } from '@angular/core';
// import {ImageUrlService} from '../../services/image-url.service';
import { ComandasService } from '../../services/comandas.service';
import { Router } from '@angular/router'
import { ImageUrlService } from '../../services/image-url.service';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.page.html',
  styleUrls: ['./comanda.page.scss'],
})
export class ComandaPage implements OnInit {
  private comandasTomadas=[];
  listado;

  constructor(private http:HttpClient,private urlService:ImageUrlService,private comandaService:ComandasService, private router: Router) {
    // this.getUrls();
    // this.comandasTomadas=comandaService.getComandas();
    // console.log(this.comandasTomadas);
    // console.log(this.comandasTomadas.length);
    // // this.cargarImagenes();
    this.http.get("http://localhost/comandas.php?opcion=4").subscribe(snap => {
      //console.log(snap);
      this.listado = snap;

      for (let lista of this.listado){
        // console.log(lista.idComanda);
        let opcion=
          {
            id:lista.idComanda,
            nombre:lista.usuario,
            fotoalumno:'https://cdn0.iconfinder.com/data/icons/flowers-and-leaves/47/flower_9-512.png',
            primero:lista.primero,
            segundo:lista.segundo,
            postre:lista.postre
          };
        this.comandasTomadas.push(opcion);
      }
      // console.log(this.comandasTomadas);
      this.cargarImagenes();
    });


  }

  ngOnInit() {

  }

  cargarImagenes(){
    for(let comanda of this.comandasTomadas){
      // console.log(comanda.nombre);
      this.http.get("http://localhost/comandas.php?opcion=5&idprimero="+comanda.primero).subscribe(snap => {
        this.listado=snap;
        // console.log(this.listado);
        // console.log(this.listado[0].idImagen);
        comanda.primero=this.urlService.getUrl(this.listado[0].idImagen,'true',this.urlService.blanco);
        // console.log(comanda.primero);
      });
      this.http.get("http://localhost/comandas.php?opcion=6&idsegundo="+comanda.segundo).subscribe(snap => {
        this.listado=snap;
        comanda.segundo=this.urlService.getUrl(this.listado[0].idImagen,'true',this.urlService.blanco);
      });
      this.http.get("http://localhost/comandas.php?opcion=7&idpostre="+comanda.postre).subscribe(snap => {
        this.listado=snap;
        comanda.postre=this.urlService.getUrl(this.listado[0].idImagen,'true',this.urlService.blanco);
        console.log(comanda.postre);
      });
    }
  }


  pulsarBoton(){
    this.router.navigateByUrl('/alumno/comanda/aniadir-comanda');
  }
}
