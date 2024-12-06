import {Component, effect, input} from '@angular/core';

@Component({
  imports: [],
  template: `
    <p>
      advice-details works! You chosen Id: {{ adviceId() }}
    </p>
  `,
  styles: ``
})
export class AdviceDetailsComponent {
  adviceId = input<string>()

  constructor() {
    effect(() => {
      console.log('Call backend because of change adviceId', this.adviceId());
    });
  }
}
