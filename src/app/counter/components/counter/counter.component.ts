import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }
  dincreaseBy(value: number): void {
    this.counter -= value;
  }
  reset() {
    this.counter = 10;
  }
}
