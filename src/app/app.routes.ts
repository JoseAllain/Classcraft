import { RouterModule,Routes } from '@angular/router';


export const routes: Routes = [
  {path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule)},
  {path: 'registro', loadChildren: () => import('./registro/registro.module').then(m => m.RegistroModule)},
  {path: 'usuarios', loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule)},
  {path: 'aula', loadChildren: () => import('./aula/aula.module').then(m => m.AulaModule)},
  {path: 'bandeja', loadChildren: () => import('./aula/aula.module').then(m => m.AulaModule)},
  {path: 'mensajeria', loadChildren: () => import('./mensajeria/mensajeria.module').then(m=> m.MensajeriaModule)},
  {path: 'contenidoProfesor', loadChildren: () => import('./contenido-profesor/contenido-profesor.module').then(m => m.ContenidoProfesorModule)},
];
