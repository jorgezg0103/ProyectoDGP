//Nombre de archivo: asignar_tarea.page.spec.ts
//Fichero encargado de creación de las opciones de routing de la página web
//Autor: Jose Melguizo Ruano
//Define una función para la creación de las diversas opciones de routing

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Asignar_tareaPage } from './asignar_tarea.page';

describe('Asignar_tareaPage', () => {
  let component: Aignar_tareaPage;
  let fixture: ComponentFixture<Asignar_tareaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Asignar_tareaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Asignar_tareaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
