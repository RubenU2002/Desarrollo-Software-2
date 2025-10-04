import {Component, output, signal} from '@angular/core';
import {Character} from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
  styles: ``
})

export class CharacterAddComponent {
  name = signal('');
  power = signal(0);
  newCharacter = output<Character>();

  addCharacter() {
    if(!this.name() || !this.power() || this.power() < 0) {
      return;
    }

    const objectCharacter: Character ={
      id: 1000,
      name: this.name(),
      power: this.power(),
    }
    this.newCharacter.emit(objectCharacter);
    this.resetFields();
  }

  resetFields() {
    this.name.set('')
    this.power.set(0)
  }
}
