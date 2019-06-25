import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task.model';
import { TaskHttpService } from '../service/task-http.service';

@Component({
  selector: 'app-find-task',
  templateUrl: './find-task.component.html',
  styleUrls: ['./find-task.component.css']
})
export class FindTaskComponent implements OnInit {

  tasks: Task[] = [];

  searchTitle: string;
  targetTaskId: number;

  constructor(private taskHttpService: TaskHttpService) { }

  ngOnInit() {
  }

  searchTasks() {
    this.tasks = [];
    if (this.searchTitle !== '') {
      this.taskHttpService.getAllTasks()
      .subscribe((data: Task[]) => {
        // tslint:disable-next-line:prefer-const
        for (let task of data) {
          if (this.searchMatches(task)) {
            this.tasks.push(task);
          }
        }
      });
    }
  }

  searchMatches(task: Task): boolean {
    if (task['title'].toUpperCase().includes(this.searchTitle.toUpperCase())
        || task['text'].toUpperCase().includes(this.searchTitle.toUpperCase()) ) {
      return true;
    } else {
      return false;
    }
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
