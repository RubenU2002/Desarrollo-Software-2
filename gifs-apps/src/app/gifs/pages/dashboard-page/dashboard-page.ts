import { Component } from '@angular/core';
import { SideMenuHeader } from '../../components/side-menu/side-menu-header/side-menu-header';
import { SideMenuOptions } from '../../components/side-menu/side-menu-options/side-menu-options';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-dashboard-page',
  imports: [SideMenuHeader, SideMenuOptions, RouterOutlet],
  templateUrl: './dashboard-page.html',
  styles: ``
})
export default class DashboardPage {

}
