//Nombre de archivo:home.page.ts
//Fichero encargado de dirigirel routing hacia la página principal o al fichero de estilo
//Autor: Miguel Carracedo Rodríguez
//Define el modulo de los principales componentes de la página web

import { Component } from '@angular/core';
//import { AppComponent } from '../../../app.component'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    // this.getUrl();
  }
  hola = '36994';

  getUrl(id: number, colorBoolean:string, backgroundColor:string) {
    let url="https://api.arasaac.org/api/pictograms/";
    // 36994?plural=false&color=true&backgroundColor=#ffffff&download=false
    url+=id.toString();
    url+="?plural=false&color=";
    url+=colorBoolean;
    url+="&backgroundColor=%23";
    url+=backgroundColor;
    url+="&download=false";
    return url;

  }

}
