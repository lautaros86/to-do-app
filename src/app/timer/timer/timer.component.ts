import { Component, Input } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {

  @Input()
  time: number = 1800;
  display = '';
  interval = interval(1000);
  subscribe: any;
  textBtn = 'Play';

  tooglerTimer() {
    this.isTimerOn() ? this.pause() : this.start();
  }

  isTimerOn() {
    return this.subscribe && !this.subscribe.closed
  }
  start() {
    this.textBtn = 'Pause';
    this.subscribe = this.interval.subscribe((_) => {
      if (this.time > 0) {
        this.time--;
        this.display = this.transform(this.time)
      } else {
        this.display = 'Time is over';
        this.pause();
      }
    });
  }

  pause() {
    this.textBtn = 'Start';
    this.subscribe.unsubscribe();
  }

  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return minutes + ':' + (value - minutes * 60);
  }

}
