import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ToDoElement } from 'src/app/models/todo.model';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<ToDoElement>;

  displayedColumns: string[] = ['id', 'description', 'action'];
  dataSource: ToDoElement[] = [{ id: 2, description: 'asdadsa'}];
  deleteIcon = 'delete';
  idCouter = 1;
  showPlayPause = false;
  displayTime = 0;
  totalTime = 0;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.idCouter = this.dataSource[this.dataSource.length - 1].id + 1;
  }

  addTask(task: any) {
    if (!task) return;
    const newTask = { id: this.idCouter++, description: task, timeElapsed: 0 }
    this.dataSource.push(newTask)
    this.table.renderRows();
  }

  removeTask(element: ToDoElement) {
    this.dataSource = this.dataSource.filter((task) => task.id != element.id);
    this.table.renderRows();
  }

  toogleButton(val: boolean) {
    this.showPlayPause = val;
  }

  increaseTotalTime(time: number, idTask: number) {
    this.totalTime = this.totalTime + time;
    this.taskService.sendTimeTask(idTask, time)
    .subscribe( res => console.log(res));
  }
}
