import {
    expect,
    it, xit, fit,
    describe, xdescribe, fdescribe,
    beforeEach, afterEach,
    inject,
    beforeEachProviders
} from '@angular/core/testing';

import {provide} from '@angular/core';

import {HeroesComponent} from './heroes.component';

import {Hero} from '../../models/hero';

import {Router} from '@angular/router-deprecated';
import {RouterMock} from '../../../test-helpers/RouterMock';

import {HeroService} from '../../services/hero.service';
import {HeroServiceMock} from '../../../test-helpers/HeroServiceMock';

describe('Component: Heroes', () => {
    beforeEachProviders(() => [
        provide(Router, {useClass: RouterMock}),
        provide(HeroService, {useClass: HeroServiceMock}),

        HeroesComponent
    ]);
    
    it('Should create the component', inject([HeroesComponent],
        (component: HeroesComponent) => {
            expect(component).toBeDefined();
        }));

    describe('For: ngOnInit()', () => {
        it('Should call this.getHeroes()', inject([HeroesComponent],
            (component: HeroesComponent) => {
                spyOn(component, 'getHeroes').and.callThrough();

                component.ngOnInit();

                expect(component.getHeroes).toHaveBeenCalled();
            }));
    });

    describe('For: getHeroes()', () => {
        it('Should call HeroService.getHero()', inject([HeroesComponent],
            (component: HeroesComponent) => {
                spyOn((<any>component)._heroService, 'getHeroes').and.callThrough();

                component.getHeroes();

                // 11 is the mock value returned by RouteParams.get()
                expect((<any>component)._heroService.getHeroes).toHaveBeenCalled();
            }));

        it('Should set this.heroes properly', inject([HeroesComponent],
            (component: HeroesComponent) => {
                component.getHeroes();

                // The mock has 6 heroes in total
                expect(component.heroes.length).toEqual(6);
            }));
    });

    describe('For: onSelect()', () => {
        it('Should set this.selectedHero properly', inject([HeroesComponent],
            (component: HeroesComponent) => {
                let hero = {"id": 11, "name": "Mr. Nice", power: null, alterEgo: null};

                component.onSelect(hero);

                // The mock has 6 heroes in total
                expect(component.selectedHero).toEqual(hero);
            }));
    });

    describe('For: gotoDetail()', () => {
        it('Should call Router.navigate()', inject([HeroesComponent],
            (component: HeroesComponent) => {
                spyOn((<any>component)._router, 'navigate').and.callThrough();

                component.selectedHero = new Hero(11, null);

                component.gotoDetail();

                expect((<any>component)._router.navigate).toHaveBeenCalled();
            }));
    });
});