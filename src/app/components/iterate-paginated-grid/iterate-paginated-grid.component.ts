//Nombre de archivo:iterate-paginated-grid.component.ts
//Fichero con las variables a utilizar en el html
//Autor: Laura Ortiz González
//Input: array de opciones a mostrar en la página

import { Component, OnInit, Input } from '@angular/core';
import { PaginationSizeBasedService } from '../../services/pagination-size-based.service'


@Component({
  selector: 'iterate-paginated-grid',
  templateUrl: './iterate-paginated-grid.component.html',
  styleUrls: ['./iterate-paginated-grid.component.scss'],
})
export class IteratePaginatedGridComponent implements OnInit {
  pagina_actual: number = 1;
  itemsPerPage: number =2;
  @Input() opciones:any;

  constructor( private paginationManager:PaginationSizeBasedService) { }

  ngOnInit() {
    this.opciones=JSON.parse(this.opciones);
    this.itemsPerPage=this.paginationManager.adjustPagination(this.opciones.length);
  }

}
