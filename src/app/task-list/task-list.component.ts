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
  targetTaskId: number;

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
    this.taskHttpService.deleteTask(this.tasks[this.targetTaskId - 1]['id']).subscribe();
    this.tasks.splice(this.targetTaskId - 1, 1);
  }

  setTargetTaskId(id: number) {
    this.targetTaskId = id + 1;
  }

  changeCheckedAndUpdate(index: number) {
    this.tasks[index]['checked'] = !this.tasks[index]['checked'];
    this.taskHttpService.updateTask(this.tasks[index]).subscribe();
  }
}
