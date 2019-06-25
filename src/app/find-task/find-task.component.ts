import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task.model';
import { TaskHttpService } from '../service/task-http.service';

@Component({
  selector: 'app-find-task',
  templateUrl: './find-task.component.html',
  styleUrls: ['./find-task.component.css']
})
export class FindTaskComponent implements OnInit {

  tasks: Task[] = [
    new Task(1, 'Title1', 'Text1', 'date1', false),
    new Task(2, 'Title2', 'Text2', 'date2', true)
  ];

  searchTitle: string;

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
            console.log(task);
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

  changeCheckedAndUpdate(index: number) {
    this.tasks[index]['checked'] = !this.tasks[index]['checked'];
    this.taskHttpService.updateTask(this.tasks[index]).subscribe();
  }
}
