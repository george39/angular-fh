import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  public counter: number = 10;
  increaseBy(value: number):void {
    // void es para no regresar nada
    this.counter +=1;
  }

  decreaseBy(value: number):void {
    // void es para no regresar nada
    this.counter -=1;
  }

  reset(): void {
    this.counter = 10;
  }

}
