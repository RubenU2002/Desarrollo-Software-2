import { Component,output,signal } from '@angular/core';
interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
  styles: ``
})
export class CharacterAdd {
  public name = signal('');
  public power = signal(0);
  newCharacter = output<Character>();
    addCharacter() {
    if(!this.name() && !this.power() && this.power() < 0) {
      return;
    }

    const newCharacter : Character = {
      id: 1000,
      name: this.name(),
      power: this.power()
    }
    this.newCharacter.emit(newCharacter);
    this.resetFields();
  }
  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
