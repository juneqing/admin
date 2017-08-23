import { Component, OnInit } from '@angular/core';
import { Banner, ConfigService } from '../../services/config.service';
@Component({
  selector: 'app-poster-page',
  templateUrl: './poster-page.component.html',
  styleUrls: ['./poster-page.component.css']
})
export class PosterPageComponent implements OnInit {
  banners: Banner[] = []
  constructor(public config: ConfigService) {
    this.getBanners();
  }

  ngOnInit() {
  }
  async getBanners() {
    this.banners = await this.config.Get('/admin.banners.go');
  }
  async disabledBanner(banner: Banner) {
    let result = await this.config.Post('/admin.toggleBannerActive.go', { _id: banner._id, active: !banner.active });
    await this.getBanners();
  }
}
