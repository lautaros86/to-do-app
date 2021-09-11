import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  sendTimeTask(task: any, time: number) {
    return this.http.post(this.url, {
      idTask: task.id,
      time
    })
  }
}
