import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';

import decks from "../../assets/decks.json";

import { Decklist } from '../decklist';
import { DecksService } from '../decks.service';

@Component({
  selector: 'app-deck-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './deck-list.component.html',
  styleUrl: './deck-list.component.css'
})
export class DeckListComponent {
  decklist: Decklist[] = [];
  decksService: DecksService = inject(DecksService);
  constructor() {
    this.decklist = this.decksService.getAllDecks();
  }
  loadDeck(): void {
    console.log(decks);
    console.log(this.decklist[0]);
  };
}
