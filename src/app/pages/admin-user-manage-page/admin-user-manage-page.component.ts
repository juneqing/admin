import { Component, OnInit } from '@angular/core';
import { TaskRecord, RelationTree, User, ConfigService } from '../../services/config.service';
@Component({
  selector: 'app-admin-user-manage-page',
  templateUrl: './admin-user-manage-page.component.html',
  styleUrls: ['./admin-user-manage-page.component.css']
})
export class AdminUserManagePageComponent implements OnInit {
  users: User[] = [];
  tree: RelationTree;
  taskRecords: TaskRecord[];
  constructor(public config: ConfigService) {
    this.getUsers();
  }

  async getUsers() {
    this.users = await this.config.Get('/admin.users.go');
  }

  ngOnInit() {
  }
  async deleteUser(user: User) {
    let ok = confirm('确认删除');
    if (ok) {
      let result = await this.config.Delete('/admin.rest.go?model=userModel&_id=' + user._id);
      await this.getUsers();
    }
  }
  async  relationTree(user: User) {

    this.tree = await this.config.Get('/admin.relationTree.go?userId=' + user._id);
    this.taskRecords = null;
  }
  async moneyLog(user: User) {
    this.taskRecords = await this.config.Get('/admin.userClickRecord.go?userId=' + user._id);
    this.tree = null;
  }
}
