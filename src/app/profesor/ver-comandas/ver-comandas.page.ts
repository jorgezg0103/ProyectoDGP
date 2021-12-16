import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-ver-comandas',
  templateUrl: './ver-comandas.page.html',
  styleUrls: ['./ver-comandas.page.scss'],
})
export class VerComandasPage implements OnInit {
  private listaPrimeros;
  private listaSegundos;
  private listaPostres;
  private countPrimerosList=[];
  private countSegundosList=[];
  private countPostresList=[];

  constructor(private http:HttpClient,public navCtrl: NavController) {

    this.http.get("http://localhost/comandas.php?opcion=1").subscribe(snap => {
      // console.log(snap);
      this.listaPrimeros = snap;
      this.contarPrimeros();
    });
    this.http.get("http://localhost/comandas.php?opcion=2").subscribe(snap => {
      // console.log(snap);
      this.listaSegundos = snap;
      this.contarSegundos();
    });
    this.http.get("http://localhost/comandas.php?opcion=3").subscribe(snap => {
      // console.log(snap);
      this.listaPostres = snap;
      this.contarPostres();
    });

    // this.contarPlatos();

  }

  ngOnInit() {
  }

  contarPrimeros(){
    for(let i=0;i<this.listaPrimeros.length;i++){
      this.http.get("http://localhost/comandas.php?opcion=8&id="+this.listaPrimeros[i].idPrimero).subscribe(snap => {
        let count={
          id:this.listaPrimeros[i].nombre,
          num:snap
        };
        this.countPrimerosList.push(count);
      });

    }
  }
  contarSegundos(){
    for(let i=0;i<this.listaSegundos.length;i++){
      this.http.get("http://localhost/comandas.php?opcion=9&id="+this.listaSegundos[i].idSegundo).subscribe(snap => {
        let count={
          id:this.listaSegundos[i].nombre,
          num:snap
        };
        this.countSegundosList.push(count);
      });

    }
  }
  contarPostres(){
    for(let i=0;i<this.listaPostres.length;i++){
      this.http.get("http://localhost/comandas.php?opcion=10&id="+this.listaPostres[i].idPostre).subscribe(snap => {
        let count={
          id:this.listaPostres[i].nombre,
          num:snap
        };
        this.countPostresList.push(count);
      });

    }
  }
  contarPlatos(){
    this.contarPrimeros();
    this.contarSegundos();
    this.contarPostres();
  }

}
