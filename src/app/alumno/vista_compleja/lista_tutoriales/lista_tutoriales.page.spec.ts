//Nombre de archivo: alumnos.page.spec.ts
//Fichero encargado de creación de las opciones de routing de la página web
//Autor: Alejandro Soriano Morante
//Define una función para la creación de las diversas opciones de routing

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Lista_tutorialesPage } from './lista_tutoriales.page';

describe('Lista_tutorialesPage', () => {
  let component: Lista_tutorialesPage;
  let fixture: ComponentFixture<Lista_tutorialesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Lista_tutorialesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Lista_tutorialesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});