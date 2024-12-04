import { Component, OnInit } from '@angular/core';
import { JsonPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-sample-counter',
  imports: [JsonPipe, UpperCasePipe],
  templateUrl: './sample-counter.component.html',
  styleUrl: './sample-counter.component.css',
})
export class SampleCounterComponent implements OnInit {
  counter = 10;
  // doubleCounter = 0;

  someText = 'Hello text';
  JSON = JSON;
  user = { name: 'Krysia' };

  private readonly START_NUMBER = 200;

  // computed propery (wartość obliczana na podstawie innej wartości)
  get doubleCounter() {
    return this.counter * 2;
  }

  ngOnInit(): void {
    console.log('SampleCounterComponent.ngOnInit()');
    setTimeout(() => {
      this.counter = this.START_NUMBER;
    }, 4000);
  }

  incrementCounter(ev: MouseEvent, btn: HTMLButtonElement) {
    console.dir(btn);
    console.log(ev);
    this.counter++;
  }
}
