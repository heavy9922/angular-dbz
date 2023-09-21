import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-pages',
  templateUrl: 'main-page.component.html',
})
export class MainPagesComponent {
  constructor(private serviceCharacter: DbzService) {}

  get character(): Character[] {
    return [...this.serviceCharacter.character];
  }

  onNewCharacter(character: Character) {
    this.serviceCharacter.onNewCharacter(character);
  }

  onDeleteCharacter(id: string): void {
    this.serviceCharacter.onDeleteCharacter(id);
  }
}
