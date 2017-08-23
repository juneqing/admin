import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { ConfigService } from '../../services/config.service';
@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {
  advertRoute: Route;
  constructor(public config: ConfigService) {
    this.getAdvertRoute();
  }

  ngOnInit() {
  }

  getAdvertRoute() {
    this.advertRoute = this.config.router.config.find(route => route.path === 'admin');
    // this.advertRoute.
  }

}
