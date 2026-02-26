import { Routes } from '@angular/router';
import {authUserGuard} from './core/guards/auth-user/auth-user-guard';

export const routes: Routes = [
  {path:'',
    loadComponent: () => import("./layouts/main-layout/main-layout").then(c=>c.MainLayout),
  children:[
    {path:'', loadComponent: () => import ("./layouts/layouts").then(c=>c.Layouts)}
  ]},
  {
    path: 'Licores',
    loadComponent: () => import("./layouts/main-layout/components/pag-licores/pag-licores").then(c => c.PagLicores), canActivate: [authUserGuard],
    children:[
      {path:'Licores', loadComponent: () => import ("./layouts/layouts").then(c=>c.Layouts)}
    ]},
  {path:'contact', loadComponent: () => import("./layouts/main-layout/components/contacto/contacto").then(c=>c.Contacto),
    children:[
      {path:'contact', loadComponent: () => import ("./layouts/layouts").then(c=>c.Layouts)}
    ]},
  {path:'carrito', loadComponent: () => import("./layouts/main-layout/components/carrito/carrito").then(c=>c.Carrito)},
  {path:'pedido', loadComponent: () => import("./layouts/main-layout/components/pedido/pedido").then(c=>c.Pedido)},
];
