//Nombre de archivo: alumnos.page.spec.ts
//Fichero encargado de creación de las opciones de routing de la página web
//Autor: Alejandro Soriano Morante
//Define una función para la creación de las diversas opciones de routing

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Eliminar_tutorialPage } from './eliminar_tutorial.page';

describe('Eliminar_tutorialPage', () => {
  let component: Eliminar_tutorialPage;
  let fixture: ComponentFixture<Eliminar_tutorialPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Eliminar_tutorialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Eliminar_tutorialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});