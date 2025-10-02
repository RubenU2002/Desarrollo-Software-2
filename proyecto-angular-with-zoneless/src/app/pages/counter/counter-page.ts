import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.html',
  styleUrl: './counter-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush // OnPush es una estrategia de cambio de detección que se basa en las señales y no en el DOM
})
export class CounterPage {
  counter: number = 0;
  counterSignal = signal(0)

  constructor() {
    setInterval(() => {
      // Se actualiza tanto el counter como el counterSignal porque el zoneless actualiza la vista por la señal, y aunque no detecta el cambio en el counter, al actualizar la señal, se actualiza la vista
      this.counter++;
      this.counterSignal.update((currentValue) => currentValue + 1)
      console.log("Se actualizó");
    }, 1000)
  }

  add(value: number) {
    this.counter += value;
    // this.counterSignal.set(this.counterSignal() + value)
    this.counterSignal.update((currentValue) => currentValue + value) // update es una función que recibe una función por parametro y devuelve un valor del mismo tipo
  }

  decrease(value: number) {
    this.counter -= value;
    // this.counterSignal.set(this.counterSignal() - value)
    this.counterSignal.update((currentValue) => currentValue - value)
  }

  reset() {
    this.counter = 0;
    // this.counterSignal.set(0)
    this.counterSignal.update(() => 0)
  }

}
