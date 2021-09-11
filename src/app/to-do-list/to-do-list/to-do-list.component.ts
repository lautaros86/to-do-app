import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

export interface ToDoElement {
  id: number;
  description: string;
}

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<ToDoElement>;

  displayedColumns: string[] = ['id', 'description', 'action'];
  dataSource: ToDoElement[] = [];
  deleteIcon = 'delete';
  idCouter = 1;

  constructor() { }

  ngOnInit() {
    this.idCouter = this.dataSource[this.dataSource.length - 1].id + 1
  }

  addTask(task: any) {
    if (!task.value) return;
    const newTask = { id: this.idCouter++, description: task.value }
    this.dataSource.push(newTask)
    this.table.renderRows();
    task.value = '';
  }
  onSubmit(event: any, task: any) {
    event.preventDefault();
    this.addTask(task)
  }
  removeTask(element: ToDoElement) {
    this.dataSource = this.dataSource.filter((task) => task.id != element.id);
    this.table.renderRows();
  }

}
