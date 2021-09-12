import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer/timer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TimeMinutesPipe } from '../pipes/minutes/time-minutes.pipe';
import { SvgIconComponent } from './svg-icon/svg-icon/svg-icon.component';

@NgModule({
  declarations: [
    TimerComponent,
    TimeMinutesPipe,
    SvgIconComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [TimerComponent]
})
export class TimerModule { }
