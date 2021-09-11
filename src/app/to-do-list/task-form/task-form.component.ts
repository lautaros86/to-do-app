import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  @Output() newTask = new EventEmitter<string>();
  constructor() { }

  onSubmit(event: any, task: any) {
    event.preventDefault()
    this.newTask.emit(task.value)
    task.value = '';
  }

}
