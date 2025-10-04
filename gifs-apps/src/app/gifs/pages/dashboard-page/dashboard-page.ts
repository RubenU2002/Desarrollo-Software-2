import { Component } from '@angular/core';
import { SideMenu } from '../../components/side-menu/side-menu';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-dashboard-page',
  imports: [SideMenu, RouterOutlet],
  templateUrl: './dashboard-page.html',
  styles: ``
})
export default class DashboardPage {

}
