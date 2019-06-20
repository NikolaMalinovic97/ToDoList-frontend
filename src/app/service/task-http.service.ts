import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../model/task.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskHttpService {

  url = 'http://localhost:8080/api/tasks';
  headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'});

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url, {headers: this.headers});
  }

  deleteTask(id: number): Observable<Object> {
    return this.http.delete(this.url + '/' + id, {headers: this.headers});
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(this.url, task, {headers: this.headers});
  }
}
