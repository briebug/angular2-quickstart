import {Injectable} from '@angular/core';

import {TestPromise} from './TestPromise';

@Injectable()
export class HeroServiceMock {

    heroes: any = [ 
        {"id": 11, "name": "Mr. Nice", power: null, alterEgo: null},
        {"id": 12, "name": "Narco", power: null, alterEgo: null},
        {"id": 13, "name": "Bombasto", power: null, alterEgo: null},
        {"id": 14, "name": "Celeritas", power: null, alterEgo: null},
        {"id": 15, "name": "Magneta", power: null, alterEgo: null},
        {"id": 16, "name": "RubberMan", power: null, alterEgo: null}
    ];
    
    getHeroes() {
        // Use to make the promise invoke .then/.catch instantly
        // window.Promise is unpredictable when testing
        return new TestPromise(this.heroes, true);
    }

    getHero(id: number) {
        return new TestPromise(this.heroes.filter(hero => 
            hero.id === id
        )[0], true)
    }

    getHeroesSlowly() {
        this.heroes = setTimeout(this.getHeroes(), 500);
        return this.heroes;
    }
}
