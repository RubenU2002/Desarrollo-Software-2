import { Component, signal, computed } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterList],
  templateUrl: './dragonball-super.html'
})
export class DragonballSuper {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Ruben', power: 150 },
    { id: 2, name: 'Videl', power: 85 },
    { id: 3, name: 'Trunks', power: 110 },
    { id: 4, name: 'Mr. Satán', power: 40 },
  ]);

  powerClass = computed(() => {
    return {
      'text-danger': true,
    }
  })

  addCharacter() {
    if(!this.name() && !this.power() && this.power() < 0) {
      return;
    }

    const newCharacter = {
      id: this.characters.length + 1,
      name: this.name(),
      power: this.power()
    }

    // const newListCharacters = [...this.characters(), newCharacter];

    this.characters.update((list) => [...list, newCharacter]);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
