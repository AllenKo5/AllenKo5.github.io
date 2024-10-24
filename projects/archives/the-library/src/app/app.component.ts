import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DeckListComponent } from './deck-list/deck-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DeckListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'the-library';

  loadCard(): void {
    const SCRYFALL_URL: string = 'https://api.scryfall.com/cards/named?';
    let url: string = SCRYFALL_URL;

    console.log(url);
  }
}
