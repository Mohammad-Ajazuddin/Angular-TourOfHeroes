import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
//import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
  heroes: Hero[] = [];
  //selectedHero?: Hero;
  //constructor(private heroService: HeroService, private messageService : MessageService ){}

  constructor(private heroService: HeroService){}

  ngOnInit():void{
    this.getHeroes();
  }

  //Normal
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  //Observable --asynchronous
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }
}