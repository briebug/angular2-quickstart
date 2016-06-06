import {Injectable} from '@angular/core';

@Injectable()
export class HeroServiceMock {

    heroes: any = [ {"id": 11, "name": "Mr. Nice", power: null, alterEgo: null},
                    {"id": 12, "name": "Narco", power: null, alterEgo: null},
                    {"id": 13, "name": "Bombasto", power: null, alterEgo: null}
    ];

    getHeroes() {
        return this.heroes;
    }

    getHero(id: number) {
        // .then(
        //     heroes => heroes.filter(hero => hero.id === id)[0];
    }

    getHeroesSlowly() {
        this.heroes = setTimeout(this.getHeroes(), 500);
        return this.heroes;
    }
}
