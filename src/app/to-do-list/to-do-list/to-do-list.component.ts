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

  ngOnInit() {
    this.idCouter = this.dataSource[this.dataSource.length - 1].id + 1
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
}
