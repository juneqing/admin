import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { Types } from '../../types/types';
@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  @Output() onToggleMenu = new EventEmitter<boolean>();
  // 开关用户基本信息
  showUserInfo: boolean = false;
  advert: Types.Advert;
  constructor(public config: ConfigService) {
    this.advert = this.config.advert;
  }

  //帐号退出 
  signOut() {
    localStorage.clear();
    this.config.router.navigateByUrl('/login');
  }
  ngOnInit() {
  }
  toggleMenu() {
    this.onToggleMenu.emit(true);
  }


}
