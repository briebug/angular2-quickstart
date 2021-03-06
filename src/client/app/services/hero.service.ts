import {Injectable} from '@angular/core';
import {Hero} from '../models/hero';
import {HEROES} from '../mocks/mock-heroes';

@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }

    getHero(id: number) {
        return Promise.resolve(HEROES).then(
                heroes => heroes.filter(hero => hero.id === id)[0]
        );
    }

    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
                setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
        );
    }
}
