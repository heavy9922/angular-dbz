import { Component, EventEmitter, Input, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [
    {
      id: uuid(),
      name: 'Trunk',
      power: 10,
    },
  ];

  onDeleteId = (id: string = ''): void => {
    this.onDeleteCharacter.emit(id);
  };
}
