import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ToDoElement } from 'src/app/models/todo.model';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<ToDoElement>;

  displayedColumns: string[] = ['id', 'description', 'action'];
  dataSource: ToDoElement[] = [{ id: 2, description: 'asdadsa', timeElapsed: 0 }];
  deleteIcon = 'delete';
  idCouter = 1;
  showPlayPause = false;
  displayTime = '00:00:00';
  totalTime = 0;

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
    console.log("valor es: ", val)
    this.showPlayPause = val;
  }
  increaseTotalTime(time: number) {
    this.totalTime = this.totalTime + time;
    this.displayTime = this.transform(this.totalTime);
  }

  transform(value: number): string {
    let sec_num = value;
    let hours = Math.floor(sec_num / 3600).toString();
    let minutes = Math.floor((sec_num - (+hours * 3600)) / 60).toString();
    let seconds = (sec_num - (+hours * 3600) - (+minutes * 60)).toString();

    if (hours.length < 2) { hours = "0" + hours; }
    if (minutes.length < 2) { minutes = "0" + minutes; }
    if (seconds.length < 2) { seconds = "0" + seconds; }
    return `${hours}:${minutes}:${seconds}`;
  }
}
