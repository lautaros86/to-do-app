import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { TimerModule } from '../timer/timer.module';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ToDoListComponent],
  imports: [
    CommonModule,
    MatTableModule,
    TimerModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    ],
  exports: [
    ToDoListComponent
  ]
})
export class ToDoListModule { }
