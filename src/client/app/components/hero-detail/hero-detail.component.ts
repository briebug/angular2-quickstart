import {Component, Input, OnInit} from 'angular2/core';
import { RouteParams } from 'angular2/router';

import {Hero} from '../../models/hero';
import {HeroService} from '../../services/hero.service';
import {HeroFormComponent} from '../../components/hero-form/hero-form.component';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/components/hero-detail/hero-detail.component.html',
    styleUrls: ['app/components/hero-detail/hero-detail.component.css'],
    directives: [HeroFormComponent]
})

export class HeroDetailComponent  implements OnInit {
    hero: Hero;

    constructor(
        private _heroService: HeroService,
        private _routeParams: RouteParams
    ){}

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id)
            .then(hero => this.hero = hero);
    }
}
