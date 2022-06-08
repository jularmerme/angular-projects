import { Injectable } from '@angular/core';
import { HEROES } from '../models/mock-heroes';
import { Hero } from '../models/hero';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  // Inject our messageService within this service so it can product message to the queue
  // Typical service-in-service injection
  constructor(private messageService: MessagesService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched all heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // For noew, we assume that a hero with a specified id always exists
    // error handling will be added later
    const hero = HEROES.find((h) => h.id == id)!;
    // Send a Message of this activity to the message service
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
