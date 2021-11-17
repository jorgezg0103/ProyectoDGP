//Nombre de archivo:opciones.page.spec.ts
//Fichero encargado de creación de las opciones de routing de la página web
//Autor: Alejandro Soriano Morante
//Define una función para la creación de las diversas opciones de routing

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OpcionesPage } from './opciones.page';

describe('OpcionesPage', () => {
  let component: OpcionesPage;
  let fixture: ComponentFixture<OpcionesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OpcionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
