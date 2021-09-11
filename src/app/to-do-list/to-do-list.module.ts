import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { TimerModule } from '../timer/timer.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskService } from '../services/task.service';
import { HttpClientModule } from '@angular/common/http';
import { TimeHoursPipe } from '../pipes/hours/time-hours.pipe';



@NgModule({
  declarations: [
    ToDoListComponent,
    TaskFormComponent,
    TimeHoursPipe,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    TimerModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [TaskService],
  exports: [
    ToDoListComponent
  ]
})
export class ToDoListModule { }
