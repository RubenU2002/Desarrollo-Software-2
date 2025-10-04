import { Component } from '@angular/core';
import { RouterLink,RouterLinkActive } from '@angular/router';

interface MenuOption{
  label: string;
  subLabel: string;
  icon: string;
  route: string;
}
@Component({
  selector: 'app-side-menu-options',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './side-menu-options.html',
  styles: ``
})
export class SideMenuOptions {
  menuOptions: MenuOption[] = [
    {
      label: 'Trending',
      subLabel: 'Gifs populares',
      icon: 'fa-solid fa-chart-line',
      route: '/dashboard/trending'
    },
    {
      label: 'Search',
      subLabel: 'Buscador gifs',
      icon: 'fa-solid fa-magnifying-glass',
      route: '/dashboard/search'
    }
  ];
}
