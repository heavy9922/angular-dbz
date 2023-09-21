import { Component, EventEmitter, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    if (this.character.name.length === 0) return;
    console.log(this.character);
    this.onNewCharacter.emit(this.character);
    this.character = { power: 0, name: ''};
  }
}
