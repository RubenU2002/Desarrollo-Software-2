import { Routes } from '@angular/router';
import { CounterPage } from './pages/counter/counter-page';
import { CarPage } from './pages/car/car-page';
import { Dragonball } from './pages/dragonball/dragonball';
import { DragonballSuper } from './pages/dragonball-super/dragonball-super';

export const routes: Routes = [
  {
    path: '',
    component: CounterPage
  },
  {
    path: 'car',
    component: CarPage
  },
  {
    path: 'dragonball',
    component: Dragonball
  },
  {
    path: 'dragonball-super',
    component: DragonballSuper
  },
  {
    path: '**',
    redirectTo: ''
  }
];
