// Requisitos: en el html debe haber una sección de paginación
// con el id "paginacion"
// Para que se vea el cambio es necesario recargar la página

import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PaginationSizeBasedService {

  constructor(private platform:Platform) { }

  adjustPagination(numberOfItems: number){
    let items=0;
    let width=this.platform.width();
    let height=this.platform.height()-0.4*this.platform.height();
    let max=Math.max(width,height);
    items=Math.floor(max/220);
    if(items>=numberOfItems){
      var paginacionHTML=document.getElementById('paginacion');
      paginacionHTML.style.display="none";
    }
    return items;
  }
  adjustPaginationFirstTime(numberOfItems: number){
    let items=0;
    let width=this.platform.width();
    let height=this.platform.height();
    items=Math.floor(width/200);
    return items;
  }
}
