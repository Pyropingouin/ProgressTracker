import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ProgressTracker');

  maxProgress: number = 100;

  muscles: number = 30;
  flex: number = 0;
  code: number = 0;
  smut: number = 0;
  money: number = 0;

  increaseMuscles(amount: number): void {
    this.muscles = Math.min(this.muscles + amount, this.maxProgress);
  }

  increaseFlex(amount: number): void {
    this.flex = Math.min(this.flex + amount, this.maxProgress);
  }

  increaseCode(amount: number): void {
    this.code = Math.min(this.code + amount, this.maxProgress);
  }

  increaseSmut(amount: number): void {
    this.smut = Math.min(this.smut + amount, this.maxProgress);
  }

  increaseMoney(amount: number): void {
    this.money = Math.min(this.money + amount, this.maxProgress);
  }
}
