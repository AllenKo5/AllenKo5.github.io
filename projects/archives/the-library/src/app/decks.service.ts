import { Injectable } from '@angular/core';

import { Decklist } from './decklist';

@Injectable({
  providedIn: 'root'
})
export class DecksService {
  decklist: Decklist[] = [
    {
      id: 0,
      name: "Seasons Past",
      main: [
        "1 Anguished Unmaking",
        "2 Canopy Vista",
        "2 Caves of Koilos",
        "3 Dark Petition",
        "3 Duress",
        "3 Evolving Wilds",
        "3 Forest",
        "3 Grasp of Darkness",
        "3 Hissing Quagmire",
        "2 Kalitas, Traitor of Ghet",
        "4 Languish",
        "2 Llanowar Wastes",
        "1 Nissa, Vastwood Seer",
        "1 Nissa's Renewal",
        "3 Painful Truths",
        "1 Plains",
        "2 Read the Bones",
        "3 Ruinous Path",
        "2 Seasons Past",
        "3 Shambling Vent",
        "2 Sorin, Grim Nemesis",
        "7 Swamp",
        "2 Transgress the Mind",
        "2 Ultimate Price"
      ],
      side: [
        "2 Anguished Unmaking",
        "1 Clip Wings",
        "2 Dead Weight",
        "1 Den Protector",
        "2 Flaying Tendrils",
        "2 Hallowed Moonlight",
        "1 Infinite Obliteration",
        "1 Kalitas, Traitor of Ghet",
        "1 Linvala, the Preserver",
        "2 Virulent Plague"
      ],
      notes: ""
    }
  ]
  getAllDecks(): Decklist[] {
    return this.decklist;
  }
  getDeckByName(name: string): Decklist | undefined {
    return this.decklist.find((deck) => deck.name === name);
  }
  constructor() { }
}
