// Import testing functions
import {
    expect,
    it, xit, fit,
    describe, xdescribe, fdescribe,
    beforeEach, afterEach,
    inject,
    beforeEachProviders
} from '@angular/core/testing';

// Import required items for testing
import {provide} from '@angular/core';

// Import the component being tested
import {DashboardComponent} from './dashboard.component';

// Import models used by the component
import {Hero} from '../../models/hero';

// Import component dependencies and their mock
import {Router} from '@angular/router-deprecated';
import {RouterMock} from '../../../test-helpers/RouterMock';

import {HeroService} from '../../services/hero.service';
import {HeroServiceMock} from '../../../test-helpers/HeroServiceMock';

describe('Component: Dashboard', () => {
    beforeEachProviders(() => [
        // Mock each dependency
        provide(HeroService, {useClass: HeroServiceMock}),
        provide(Router, {useClass: RouterMock}),

        DashboardComponent
    ]);

    it('Should create the component', inject([DashboardComponent],
        (component: DashboardComponent) => {
            expect(component).toBeDefined();
        }));

    describe('For: ngOnInit', () => {
        it('Should call HeroService.getHeroes()', inject([DashboardComponent],
            (component: DashboardComponent) => {
                spyOn((<any>component)._heroService, 'getHeroes').and.callThrough();

                component.ngOnInit();

                expect((<any>component)._heroService.getHeroes).toHaveBeenCalled();
            }));

        it('Should set this.heroes to the first 5 heroes', inject([DashboardComponent],
            (component: DashboardComponent) => {
                component.ngOnInit();

                let heroes = component.heroes;
                expect(heroes.length).toEqual(4);
            }));
    });

    describe('For: gotoDetail', () => {
        it('Should call Router.navigate()', inject([DashboardComponent],
            (component: DashboardComponent) => {
                spyOn((<any>component)._router, 'navigate').and.callThrough();

                component.gotoDetail(new Hero(11, null));

                expect((<any>component)._router.navigate).toHaveBeenCalled();
            }));
    });
});
