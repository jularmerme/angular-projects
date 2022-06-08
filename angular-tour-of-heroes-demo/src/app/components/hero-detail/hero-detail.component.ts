import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/service/hero.service';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    // Render the hero info after the component initialization
    this.getHero();
  }

  getHero(): void {
    // Capture the id from the URL
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Make a call to our hero service to get our hero's information
    this.heroService.getHero(id).subscribe((hero) => {
      this.hero = hero;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
