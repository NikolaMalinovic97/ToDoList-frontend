import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskHttpService {

  url = 'http://localhost:8080/api/tasks';
  headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'});

  constructor(private http: HttpClient) { }

  getAllTasks() {
    return this.http.get<Task[]>(this.url, {headers: this.headers});
  }
}
