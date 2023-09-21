import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescrition(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHere(): void {
    this.name = 'flash';
  }

  changeAge(): void {
    this.age = 25;
  }
}
