import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeHours'
})
export class TimeHoursPipe implements PipeTransform {

  transform(value: any): string {
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
