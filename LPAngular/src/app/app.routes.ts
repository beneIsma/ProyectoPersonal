import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'',
    loadComponent: () => import("./layouts/main-layouts/components/home/home").then(c=>c.Home)},
  {path: 'panelControl',
  loadComponent: () => import("./layouts/main-layouts/components/panel-control/panel-control").then(c=>c.PanelControl)},
];
