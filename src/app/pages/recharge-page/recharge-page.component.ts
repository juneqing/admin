import { Component, OnInit } from '@angular/core';
import {RechargeRecord,ConfigService} from '../../services/config.service';
@Component({
  selector: 'app-recharge-page',
  templateUrl: './recharge-page.component.html',
  styleUrls: ['./recharge-page.component.css']
})
export class RechargePageComponent implements OnInit {
  rechargeRecords:RechargeRecord[]=[];
  constructor(public config:ConfigService) {
    this.getRechargeRecords();
   }

  ngOnInit() {
  }

  async getRechargeRecords(){
    this.rechargeRecords = await this.config.Get('/admin.recharges.go');
  }

}
