import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  // this is a dummy tasks variable
  // i will add real tasks from mysql database in later stages via API (httpclient)
  tasks: Task[] = [
    new Task(1, 'Test1', 'Some text 1', '2019-06-14 19:15:12', false),
    new Task(2, 'Test2', 'Some text 2', '2019-06-18 11:15:12', false),
    new Task(3, 'Test3', 'Some text 3', '2019-06-19 13:15:12', true),
    new Task(4, 'Test1', 'Some text 1', '2019-06-14 19:15:12', false),
    new Task(5, 'Test2', 'Some text 2', '2019-06-18 11:15:12', false),
    new Task(6, 'Test3', 'Some text 3', '2019-06-19 13:15:12', true),
    new Task(7, 'Test1', 'Some text 1', '2019-06-14 19:15:12', false),
    new Task(8, 'Test2', 'Some text 2', '2019-06-18 11:15:12', false),
    new Task(9, 'Test3', 'Some text 3', '2019-06-19 13:15:12', true)
  ];

  constructor() { }

  ngOnInit() {
  }

}
