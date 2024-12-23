import { Component } from '@angular/core';

interface Fruit {
  amount: number;
  name: string;
}

@Component({
  selector: 'app-for-of-loop',
  template: `
    <h2>Iterowanie po wartościach w tablicy + generowanie HTML</h2>
    <h3 class="subtitle is-family-monospace">for-of-loop</h3>
    <div>
      @for (letter of ['a', 'b', 'c', 'd']; track letter) {
        <div>{{ letter }} !</div>
      }
    </div>
    <ul>
      @for (fruit of fruits; track fruit.name) {
        <li>{{ fruit.amount }} - {{ fruit.name }}</li>
      }
    </ul>

    <div class="panel is-info">
      <p class="panel-heading ">Kosz z owocami...</p>
      @for (fruit of fruits; track fruit.name) {
        <div class="panel-block">{{ fruit.amount }} - {{ fruit.name }}</div>
      }
    </div>
  `,
})
export class ForOfLoopComponent {
  // Zwróć uwagę, że korzystamy z modelu danych,
  // Interface (typ danych) jest zdefiniowany powyżej
  fruits: Fruit[] = [
    { amount: 2, name: 'bananas' },
    { amount: 1, name: 'apple' },
    { amount: 10, name: 'cherries' },
  ];
}
