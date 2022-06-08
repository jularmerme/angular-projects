import { getNgModuleById, Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { HeroesComponent } from '../components/heroes/heroes.component';
import { Hero } from '../models/hero';
import { HttpClient, Httpheaders}from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}

  createDb(): {
      const heros = [
         { id: 12, name: 'Dr. Nice' },
          { id: 13, name: 'Bombasto' },
          { id: 14, name: 'Celeritas' },
          { id: 15, name: 'Magneta' },
          { id: 16, name: 'RubberMan' },
          { id: 17, name: 'Dynama' },
          { id: 18, name: 'Dr. IQ' },
          { id: 19, name: 'Magma' },
          { id: 20, name: 'Tornado' },
      ];
      return {heroes};
  }}

  // Override this getId to ensure that a hero always has an Id
  // If the heroes array is empty, then the method below will return the initial number for that array(11)
  // if the heroes array is not empty, then the method below will return the higher hero id + 1
  getId(heroes: Hero[]): number {
    return HeroesComponent.length > 0 ? Math.max(...HeroesComponent.map(hero => hero.id)) + 1 : 11;
  }

}
