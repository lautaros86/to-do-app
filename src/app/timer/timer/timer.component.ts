import { Component, Input, Output, EventEmitter } from '@angular/core';
import { interval } from 'rxjs';

const playIcon = 'play_arrow';
const pauseIcon = 'pause';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {

  @Input()
  time: number = 1800;
  @Input()
  showPlayPause = true;
  @Output()
  elapsedTime = new EventEmitter<number>()

  interval = interval(1000);
  subscribe: any;
  iconBtn = playIcon;
  endTimeMessage = 'Time is over';
  startTime = 0;

  tooglerTimer() {
    this.isTimerOn() ? this.pause() : this.start();
  }

  isTimerOn() {
    return this.subscribe && !this.subscribe.closed
  }
  start() {
    this.startTime = this.time;
    this.iconBtn = pauseIcon;
    this.subscribe = this.interval.subscribe((_) => {
      if (this.time >= 1) {
        this.time--;
      } else {
        this.pause();
      }
    });
  }

  pause() {
    this.iconBtn = playIcon;
    this.subscribe.unsubscribe();
    this.elapsedTime.emit(this.startTime - this.time)
  }

  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return minutes + ':' + (value - minutes * 60);
  }

}
