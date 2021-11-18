//Nombre de archivo:inicio.page.spec.ts
//Fichero encargado de creación de las opciones de routing de la página web
//Autor: Alejandro Soriano Morante
//Define una función para la creación de las diversas opciones de routing

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InicioPage } from './inicio.page';

describe('InicioPage', () => {
  let component: InicioPage;
  let fixture: ComponentFixture<InicioPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  /*
  it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
