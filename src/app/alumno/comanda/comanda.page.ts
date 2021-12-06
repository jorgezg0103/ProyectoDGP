import { Component, OnInit } from '@angular/core';
// import {ImageUrlService} from '../../services/image-url.service';
import { ComandasService } from '../../services/comandas.service';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.page.html',
  styleUrls: ['./comanda.page.scss'],
})
export class ComandaPage implements OnInit {
  private comandasTomadas=[];

  constructor(private comandaService:ComandasService) {
    // this.getUrls();
    this.comandasTomadas=comandaService.getComandas();
  }

  ngOnInit() {

  }




  pulsarBoton(){
    this.comandaService.aniadirComanda('Antonio','https://cdn-icons-png.flaticon.com/512/119/119647.png',
                    2448,2448,2448);
  }
}
