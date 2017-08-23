import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../../services/config.service';
@Component({
  selector: 'app-static-page',
  templateUrl: './static-page.component.html',
  styleUrls: ['./static-page.component.css']
})
export class StaticPageComponent implements OnInit {
  log={
    todayActiveUserNum:0,
    todaySignupCount:3,
    totalNum:4,
    weekActiveUserNum:0,
    yesActiveUserNum:    0,
    yesSignupCount:1
  };
  constructor(public config:ConfigService) {
    this.systemLog();
   }

  ngOnInit() {
  }
  async systemLog(){
  this.log =await this.config.Get('/admin.systemLog.go');
  }

}
