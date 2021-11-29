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
    path: 'alumno/vista_basica/home',
    loadChildren: () => import('./alumno/vista_basica/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'alumno/vista_media/home',
    loadChildren: () => import('./alumno/vista_media/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'alumno/vista_compleja/home',
    loadChildren: () => import('./alumno/vista_compleja/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'alumno/vista_basica/menu',
    loadChildren: () => import('./alumno/vista_basica/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'alumno/vista_media/menu',
    loadChildren: () => import('./alumno/vista_media/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'alumno/vista_compleja/menu',
    loadChildren: () => import('./alumno/vista_compleja/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'alumno/vista_basica/agenda',
    loadChildren: () => import('./alumno/vista_basica/agenda/agenda.module').then( m => m.AgendaPageModule)
  },
  {
    path: 'alumno/vista_media/agenda',
    loadChildren: () => import('./alumno/vista_media/agenda/agenda.module').then( m => m.AgendaPageModule)
  },
  {
    path: 'alumno/vista_compleja/agenda',
    loadChildren: () => import('./alumno/vista_compleja/agenda/agenda.module').then( m => m.AgendaPageModule)
  },
  {
    path: 'alumno/vista_basica/tutoriales',
    loadChildren: () => import('./alumno/vista_basica/tutoriales/tutoriales.module').then( m => m.TutorialesPageModule)
  },
  {
    path: 'alumno/vista_media/tutoriales',
    loadChildren: () => import('./alumno/vista_media/tutoriales/tutoriales.module').then( m => m.TutorialesPageModule)
  },
  {
    path: 'alumno/vista_compleja/tutoriales',
    loadChildren: () => import('./alumno/vista_compleja/tutoriales/tutoriales.module').then( m => m.TutorialesPageModule)
  },
  {
    path: 'profesor/',
    redirectTo: 'profesor/home',
    pathMatch: 'full'
  },
  {
    path: 'profesor/inicio',
    loadChildren: () => import('./profesor/inicio/inicio.module').then( m => m.InicioPageModule)
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
    path: 'profesor/opciones',
    loadChildren: () => import('./profesor/opciones/opciones.module').then( m => m.OpcionesPageModule)
  },
  {
    path: 'profesor/tutoriales',
    loadChildren: () => import('./profesor/tutoriales/tutoriales.module').then( m => m.TutorialesPageModule)
  },
  {
    path: 'profesor/alumnos',
    loadChildren: () => import('./profesor/alumnos/alumnos.module').then( m => m.AlumnosPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
