import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router-deprecated';

import {Hero} from '../../models/hero';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';
import {HeroService} from '../../services/hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/components/heroes/heroes.component.html',
    styleUrls:  ['app/components/heroes/heroes.component.css'],
    directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(
        private _router: Router,
        private _heroService: HeroService
    ) { }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        this._heroService.getHeroes()
            .then(heroes => this.heroes = heroes);
    }

    onSelect(hero:Hero) {
        this.selectedHero = hero;
    }

    gotoDetail() {
        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
}

