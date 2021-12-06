import { Component, OnInit } from '@angular/core';
// import {ImageUrlService} from '../../services/image-url.service';
import { ComandasService } from '../../services/comandas.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.page.html',
  styleUrls: ['./comanda.page.scss'],
})
export class ComandaPage implements OnInit {
  private comandasTomadas=[];

  constructor(private comandaService:ComandasService, private router: Router) {
    // this.getUrls();
    this.comandasTomadas=comandaService.getComandas();
  }

  ngOnInit() {

  }




  pulsarBoton(){
    this.router.navigateByUrl('/alumno/comanda/aniadir-comanda');
  }
}
