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
    path: 'alumno/vista_compleja/lista_tutoriales',
    loadChildren: () => import('./alumno/vista_compleja/lista_tutoriales/lista_tutoriales.module').then( m => m.Lista_tutorialesPageModule)
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
    path: 'profesor/select',
    loadChildren: () => import('./profesor/select/select.module').then( m => m.SelectPageModule)
  },
  {
    path: 'profesor/inicio',
    loadChildren: () => import('./profesor/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'profesor/register',
    loadChildren: () => import('./profesor/register/register.module').then( m => m.RegisterPageModule)
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
    path: 'profesor/lista_tutoriales',
    loadChildren: () => import('./profesor/lista_tutoriales/lista_tutoriales.module').then( m => m.Lista_tutorialesPageModule)
  },
  {
    path: 'profesor/aniadir_tutorial',
    loadChildren: () => import('./profesor/aniadir_tutorial/aniadir_tutorial.module').then( m => m.Aniadir_tutorialPageModule)
  },
  {
    path: 'profesor/eliminar_tutorial',
    loadChildren: () => import('./profesor/eliminar_tutorial/eliminar_tutorial.module').then( m => m.Eliminar_tutorialPageModule)
  },

  {
    path: 'profesor/alumnos',
    loadChildren: () => import('./profesor/alumnos/alumnos.module').then( m => m.AlumnosPageModule)
  },
  {
    path: 'alumno/comanda',
    loadChildren: () => import('./alumno/comanda/comanda.module').then( m => m.ComandaPageModule)
  },

  {
    path: 'profesor/alumno/:id',
    loadChildren: () => import('./profesor/alumno/alumno.module').then( m => m.AlumnoPageModule)
  },

  {
    path: 'profesor/asignar_tarea',
    loadChildren: () => import('./profesor/asignar_tarea/asignar_tarea.module').then( m => m.Asignar_tareaPageModule)
  },
  {
    path: 'asignar-tutorial',
    loadChildren: () => import('./profesor/asignar-tutorial/asignar-tutorial.module').then( m => m.AsignarTutorialPageModule)
  },
  {
    path: 'profesor/ver-comandas',
    loadChildren: () => import('./profesor/ver-comandas/ver-comandas.module').then( m => m.VerComandasPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
