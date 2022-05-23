import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  gameData = [{ type: 'odd', num: 3 }];

  onCheckNumber(input: number) {
    if (input % 2 === 0) {
      this.gameData.push({ type: 'even', num: input });
    } else this.gameData.push({ type: 'odd', num: input });
  }
}
