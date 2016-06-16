import {
    expect,
    it, xit, fit,
    describe, xdescribe, fdescribe,
    beforeEach, afterEach,
    inject,
    beforeEachProviders
} from '@angular/core/testing';

import {provide} from '@angular/core';

import {HeroDetailComponent} from './hero-detail.component';

import {Hero} from '../../models/hero';

import {RouteParams} from '@angular/router-deprecated';

import {HeroService} from '../../services/hero.service';
import {HeroServiceMock} from '../../../test-helpers/HeroServiceMock';

describe('Component: HeroDetail', () => {
    beforeEachProviders(() => [
        provide(RouteParams, {useClass: class mock {
            get(param: string){
                if(param === 'id') return 11;
            }
        }}),
        provide(HeroService, {useClass: HeroServiceMock}),

        HeroDetailComponent
    ]);

    it('Should create the component', inject([HeroDetailComponent],
        (component: HeroDetailComponent) => {
            expect(component).toBeDefined();
        }));

    describe('For: ngOnInit()', () => {
        it('Should call RouteParams.get()', inject([HeroDetailComponent],
            (component: HeroDetailComponent) => {
                spyOn((<any>component)._routeParams, 'get').and.callThrough();

                component.ngOnInit();

                expect((<any>component)._routeParams.get).toHaveBeenCalledWith('id');
            }));

        it('Should call HeroService.getHero()', inject([HeroDetailComponent],
            (component: HeroDetailComponent) => {
                spyOn((<any>component)._heroService, 'getHero').and.callThrough();

                component.ngOnInit();
                
                // 11 is the mock value returned by RouteParams.get()
                expect((<any>component)._heroService.getHero).toHaveBeenCalledWith(11);
            }));

        it('Should set this.hero to the proper hero', inject([HeroDetailComponent],
            (component: HeroDetailComponent) => {
                let obj = {"id": 11, "name": "Mr. Nice", power: null, alterEgo: null};

                component.ngOnInit();

                expect(component.hero).toEqual(obj);
            }));
    });
});