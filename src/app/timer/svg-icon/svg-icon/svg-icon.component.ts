import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.svg',
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent implements OnInit, OnChanges {
  @Input() time = 8;
  α = 0
  π = Math.PI
  t = 10;
  anim = '';

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.time) {
      console.log(changes.time.currentValue);
      this.draw();
    }
  }
  draw() {
    this.α++;
    this.α %= 360;
    const r = (this.α * this.π / 180)
    const x = Math.sin(r) * 125
    const y = Math.cos(r) * - 125
    const mid = (this.α > 180) ? 1 : 0
    this.anim = 'M 0 0 v -125 A 125 125 1 '
      + mid + ' 1 '
      + x + ' '
      + y + ' z';
  }
}
