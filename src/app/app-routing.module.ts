import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'seleccion-perfil',
    pathMatch: 'full'
  },

  {
    path: 'seleccion-perfil',
    loadChildren: () => import('./seleccion-perfil/seleccion-perfil.module').then( m => m.SeleccionPerfilPageModule)
  },
  {
    path: 'alumno/home',
    loadChildren: () => import('./alumno/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'alumno/menu',
    loadChildren: () => import('./alumno/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'alumno/agenda',
    loadChildren: () => import('./alumno/agenda/agenda.module').then( m => m.AgendaPageModule)
  },
  {
    path: 'alumno/tutoriales',
    loadChildren: () => import('./alumno/tutoriales/tutoriales.module').then( m => m.TutorialesPageModule)
  },

  {
    path: 'profesor/home',
    loadChildren: () => import('./profesor/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profesor/menu',
    loadChildren: () => import('./profesor/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'profesor/agenda',
    loadChildren: () => import('./profesor/agenda/agenda.module').then( m => m.AgendaPageModule)
  },
  {
    path: 'profesor/tutoriales',
    loadChildren: () => import('./profesor/tutoriales/tutoriales.module').then( m => m.TutorialesPageModule)
  },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
