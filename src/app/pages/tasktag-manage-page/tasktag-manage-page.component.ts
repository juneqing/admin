import { Component, OnInit } from '@angular/core';
import { ConfigService, Task, TaskTag } from '../../services/config.service';
@Component({
  selector: 'app-tasktag-manage-page',
  templateUrl: './tasktag-manage-page.component.html',
  styleUrls: ['./tasktag-manage-page.component.css']
})
export class TasktagManagePageComponent implements OnInit {
  taskTags: TaskTag[] = [];
  status: 'create' | 'list' | 'edit'|'show-child' = 'list';
  // 新添加的栏目
  newTaskTag: TaskTag = { name: '', sort: 0 };
  selectedTaskTag:TaskTag;
  showChild=''
  taskNums: number[];
   editTaskTag: TaskTag;
   tasks:Task[];

 

  constructor(public config: ConfigService) {
    this.getTaskTags();
  }

  ngOnInit() {

  }

  async getTaskTags() {
    let result: { taskTags: TaskTag[], taskNums: number[] } = await this.config.Get('/admin.taskTaskAndChildren.go');
    this.taskTags = result.taskTags;
    this.taskNums = result.taskNums;

  }
  async addTaskTag() {
    let result = await this.config.Post('/admin.taskTag.go', this.newTaskTag);
    this.status = 'list';
    this.getTaskTags();
  }
  // 如果子任务的数量大于0,则不允许删除栏目,请先删除子栏目
  async deleteTaskTag(taskTag: TaskTag, subTaskNum: number) {
    if (subTaskNum > 0) {
      alert('请先删除子栏目')
    } else {
      let ok = window.confirm('确定删除');

      if (ok) {
        let result = await this.config.Delete('/admin.rest.go?model=taskTagModel&_id=' + taskTag._id);
      }
      await this.getTaskTags();
    }
  }
  async updateEditTaskTag(){
    let result =  await this.config.Put('/admin.rest.go?model=taskTagModel&_id='+this.editTaskTag._id,this.editTaskTag);
    this.status='list';
    this.getTaskTags();
  }
 async showTask(taskTag:TaskTag){
   this.selectedTaskTag=taskTag;
   this.tasks= await this.config.Get('/admin.taskByTaskTag.go?taskTag='+taskTag._id);
  }
  async beBanner(task:Task){
   let result = await this.config.Get('/admin.addBanner.go?taskId='+task._id);
   await this.getTaskTags();
  }
}
