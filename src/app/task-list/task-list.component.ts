import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task.model';
import { TaskHttpService } from '../service/task-http.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  // this is a dummy tasks variable
  // i will add real tasks from mysql database in later stages via API (httpclient)
  tasks: Task[];

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
}
