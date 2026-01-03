import { Component } from '@angular/core';
import {CommonModule } from '@angular/common'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  display: string = '';
  history: string[] = [];

  press(value: string) {
    this.display += value;
  }

  calculate() {
    try {
      const result = eval(this.display);
      this.history.unshift(`${this.display} = ${result}`);
      this.display = result.toString();
    } catch {
      this.display = 'Error';
    }
  }

  clear() {
    this.display = '';
  }

  refresh() {
    this.display = '';
    this.history = [];
  }
}

