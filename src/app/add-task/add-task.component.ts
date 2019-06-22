import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {formatDate} from '@angular/common';
import { Task } from '../model/task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const newTask = this.createTaskOutOfForm(form);
    // TODO: send http request, for adding new task, to backend
  }

  createTaskOutOfForm(form: NgForm) {
    const id = 0;
    const title = form.value.title;
    const text = form.value.text;
    const dateTime = this.getFormatedCurentDateAndTime();
    const checked = false;

    const newTask = new Task(id, title, text, dateTime, checked);

    return newTask;
  }

  getFormatedCurentDateAndTime(): string {
    const currentDateTime: any = formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss', 'en');
    return currentDateTime;
  }
}
