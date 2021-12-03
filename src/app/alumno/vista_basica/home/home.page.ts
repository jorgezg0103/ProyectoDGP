//Nombre de archivo:home.page.ts
//Fichero encargado de dirigirel routing hacia la página principal o al fichero de estilo
//Autor: Miguel Carracedo Rodríguez
//Define el modulo de los principales componentes de la página web

import { Component } from '@angular/core';
//import { AppComponent } from '../../../app.component'
import {ImageUrlService} from '../../../services/image-url.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  naranja='ff9800';
  morado='FDA1FF';
  menu: string;
  agenda: string;
  ayuda: string;



  constructor(private urlService:ImageUrlService) {
    this.getUrls();
  }

  getUrls() {
    this.menu=this.urlService.getUrl(32514,'true',this.naranja);
    this.agenda=this.urlService.getUrl(5898,'true',this.naranja);
    this.ayuda=this.urlService.getUrl(7171,'true',this.morado);
  }

}
