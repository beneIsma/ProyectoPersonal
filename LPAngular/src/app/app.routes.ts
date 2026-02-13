import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'',
    loadComponent: () => import("./layouts/main-layout/main-layout").then(c=>c.MainLayout),
  children:[
    {path:'', loadComponent: () => import ("./layouts/layouts").then(c=>c.Layouts)}
  ]},
  {
    path: 'Licores',
    loadComponent: () => import("./layouts/main-layout/components/pag-licores/pag-licores").then(c => c.PagLicores),
    children:[
      {path:'Licores', loadComponent: () => import ("./layouts/layouts").then(c=>c.Layouts)}
    ]},
  {path:'contact', loadComponent: () => import("./layouts/main-layout/components/contacto/contacto").then(c=>c.Contacto),
    children:[
      {path:'contact', loadComponent: () => import ("./layouts/layouts").then(c=>c.Layouts)}
    ]},
  {path:'admin', loadComponent: () => import("./layouts/main-layout/components/admin/panel-control-admin/panel-control-admin").then(c=>c.PanelControlAdmin)}
];
