import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heros';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
// synchronious
  // getHeroes(): Hero[] {
  //   return HEROES
  // }

  // asynchronious
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('Hero service: fetched');
    return of(HEROES);
  }
}
