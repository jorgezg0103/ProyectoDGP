import { Component, OnInit } from '@angular/core';
import {ImageUrlService} from '../../services/image-url.service'
import { Router } from '@angular/router';


@Component({
  selector: 'footer-ayuda-home',
  templateUrl: './footer-ayuda-home.component.html',
  styleUrls: ['./footer-ayuda-home.component.scss'],
})
export class FooterAyudaHomeComponent implements OnInit {
  ayudaURL: string;
  homeURL:string;
  whereisHome:string='';
  public href: string = "";

  constructor(private urlService:ImageUrlService, private router: Router) {
    this.getUrls();
    this.updateHomeRoute();
  }

  updateHomeRoute(){
    this.href = this.router.url;
    let actualRoute: string[] = this.href.split("/");
    this.whereisHome = '/alumno/' + actualRoute[2] + '/home';
  }

  ngOnInit() {}

  getUrls(){
    this.ayudaURL=this.urlService.getAyudaURL(this.urlService.morado);
    this.homeURL=this.urlService.getHomeURL('true',this.urlService.blanco);
  }

}
