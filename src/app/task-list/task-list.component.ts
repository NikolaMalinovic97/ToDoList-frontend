import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task.model';
import { TaskHttpService } from '../service/task-http.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];
  deleteTargetTaskId: number;

  constructor(private taskHttpService: TaskHttpService) { }

  ngOnInit() {
    this.showTasks();
  }

  showTasks() {
    this.taskHttpService.getAllTasks()
      .subscribe((data: Task[]) => {
        this.tasks = data;
      });
  }

  deleteTask() {
    // tslint:disable-next-line:no-unused-expression
    this.taskHttpService.deleteTask(this.deleteTargetTaskId).subscribe();
    this.tasks.splice(this.deleteTargetTaskId - 1, 1);
  }

  setDeleteTargetTaskId(id: number) {
    this.deleteTargetTaskId = id + 1;
  }

}
