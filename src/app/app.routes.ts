import { Routes } from '@angular/router';
import {CharListComponent} from "./components/char-list/char-list.component";
import {CharDetailComponent} from "./components/char-detail/char-detail.component";
import {DatosApiComponent} from "./components/datos-api/datos-api.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/characters/list',
    pathMatch: 'full'
  },
  {
    path: 'characters/list',
    component: CharListComponent,
  },
  {
    path: 'users',
    component: DatosApiComponent,
  },
  {
    path: 'characters/detail/:id',
    component: CharDetailComponent,
  },
  {
    path: '**',
    redirectTo: '/characters/list',
    pathMatch: 'full'
  },
];
