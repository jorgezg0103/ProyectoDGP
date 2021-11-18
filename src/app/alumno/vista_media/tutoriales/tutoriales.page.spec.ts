//Nombre de archivo:tutoriales.page.spec.ts
//Fichero encargado de creación de las opciones de routing de la página web
//Autor: Miguel Carracedo Rodríguez
//Define una función para la creación de las diversas opciones de routing

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TutorialesPage } from './tutoriales.page';

describe('TutorialesPage', () => {
  let component: TutorialesPage;
  let fixture: ComponentFixture<TutorialesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TutorialesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  /*
  it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
