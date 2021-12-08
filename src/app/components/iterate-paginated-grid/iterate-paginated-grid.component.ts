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
  // @Input() opciones= [
  //   {
  //     id:'1',
  //     nombre:'PRIMER PLATO',
  //     to:'../menu',
  //     imageURL:''
  //   }
  // ]
  @Input() opcionesInput:any;
  private opciones = [
    {
      id:'1',
      nombre:'PRIMER PLATO',
      to:'../menu',
      imageURL:''
    },
    {
      id:'2',
      nombre:'SEGUNDO PLATO',
      to:'../agenda',
      imageURL:''
    },
    {
      id:'3',
      nombre:'POSTRE',
      to:'../agenda',
      imageURL:''
    }
]
  constructor( private paginationManager:PaginationSizeBasedService) {
    // this.opciones=
  }

  ngOnInit() {
    // this.itemsPerPage=this.paginationManager.adjustPagination(this.opciones.length);
    console.log(this.opciones);
    this.opcionesInput=JSON.parse(this.opcionesInput);
    console.log("Opciones input:"+ this.opcionesInput[0].id);
    console.log("Ttamano: "+this.opcionesInput.length);
  }

}
