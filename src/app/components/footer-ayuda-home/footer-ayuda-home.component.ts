import { Component, OnInit } from '@angular/core';
import {ImageUrlService} from '../../services/image-url.service'


@Component({
  selector: 'footer-ayuda-home',
  templateUrl: './footer-ayuda-home.component.html',
  styleUrls: ['./footer-ayuda-home.component.scss'],
})
export class FooterAyudaHomeComponent implements OnInit {
  ayudaURL: string;
  homeURL:string;
  whereisHome:string='/alumno/vista_basica/home';
  constructor(private urlService:ImageUrlService) {
    this.getUrls();
  }

  ngOnInit() {}

  getUrls(){
    this.ayudaURL=this.urlService.getAyudaURL(this.urlService.morado);
    this.homeURL=this.urlService.getHomeURL('true',this.urlService.blanco);
  }

}
