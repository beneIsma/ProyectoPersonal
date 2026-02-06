import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'',
    loadComponent: () => import("./layouts/main-layouts/main-layouts").then(c=>c.MainLayouts)},
];
