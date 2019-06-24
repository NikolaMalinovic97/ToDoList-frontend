import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task.model';

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

  constructor() { }

  ngOnInit() {
  }

  searchTasks() {
    console.log(this.searchTitle);
  }
}
