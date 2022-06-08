import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm',
  // };

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((x) => {
      console.log(x);
      this.heroes = x;
    });
  }

  onSelect(hero: Hero): void {
    this.messageService.add(
      `You select hero with id of: ${hero.id} and name ${hero.name}`
    );
    console.log(hero);
    this.selectedHero = hero;
  }
}
