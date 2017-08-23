import 'rxjs/add/operator/toPromise';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RouterModule } from '@angular/router';


import { ConfigService } from './services/config.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HashComponent } from './com/hash/hash.component';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AdminSidebarComponent } from './com/admin-sidebar/admin-sidebar.component';
import { AdminHeaderComponent } from './com/admin-header/admin-header.component';
import { AdminHomePageComponent } from './pages/admin-home-page/admin-home-page.component';
import { AdminUserManagePageComponent } from './pages/admin-user-manage-page/admin-user-manage-page.component';
import { TasktagManagePageComponent } from './pages/tasktag-manage-page/tasktag-manage-page.component';
import { StaticPageComponent } from './pages/static-page/static-page.component';
import { PosterPageComponent } from './pages/poster-page/poster-page.component';
import { SystemLogPageComponent } from './pages/system-log-page/system-log-page.component';
import { RechargePageComponent } from './pages/recharge-page/recharge-page.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,



    HashComponent,

    AdminPageComponent,
    AdminSidebarComponent,
    AdminHeaderComponent,
    AdminHomePageComponent,
    AdminUserManagePageComponent,
    TasktagManagePageComponent,
    StaticPageComponent,
    PosterPageComponent,
    SystemLogPageComponent,
    RechargePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
      { path: 'admin/login', component: LoginPageComponent, data: { label: '登录界面', hidden: true } },

      {
        path: 'admin', component: AdminPageComponent, data: { label: '管理员首页' },
        children: [

          { path: '', component: AdminHomePageComponent, data: { label: '控制面板' } },
          { path: 'system-log', component: SystemLogPageComponent, data: { label: '系统日志' } },
          { path: 'static', component: StaticPageComponent, data: { label: '统计分析' } },
          {
            path: 'user-manage', component: AdminUserManagePageComponent, data: { label: '用户管理' }
          }, {
            path: 'tasktag-manage', component: TasktagManagePageComponent, data: { label: '广告分类以及内容管理' }
          }, {

            path: 'post-manage', component: PosterPageComponent, data: { label: '轮播广告管理' }
          }, { path: 'recharge-list', component: RechargePageComponent, data: { label: '充值记录' } }]
      }
    ]),
    FormsModule,
    HttpModule,
    ChartsModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
