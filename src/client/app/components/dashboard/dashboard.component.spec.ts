// Import testing functions
import {
    expect,
    it, xit, fit,
    describe, xdescribe, fdescribe,
    beforeEach, afterEach,
    async,
    inject,
    beforeEachProviders,
} from '@angular/core/testing';

// Import required items for testing
import {TestComponentBuilder} from '@angular/compiler/testing';
import {provide} from '@angular/core';

// Import the component being tested
import {DashboardComponent} from './dashboard.component';

// Import component dependencies and their mock
import {Router} from '@angular/router-deprecated';
import {RootRouterMock} from '../../../test-helpers/RootRouterMock';

import {HeroService} from '../../services/hero.service';
import {HeroServiceMock} from '../../../test-helpers/HeroServiceMock';

describe('Component: Dashboard', () => {
    beforeEachProviders(() => [
        // Mock each dependency
        provide(HeroService, {useClass: HeroServiceMock}),
        provide(Router, {useClass: RootRouterMock})
    ]);

    it('Should create the component', async(inject([TestComponentBuilder],
        (tcb: TestComponentBuilder) => {
            tcb.createAsync(DashboardComponent).then((fixture) => {
                fixture.detectChanges();

                let compiled = fixture.debugElement.nativeElement;
                expect(compiled).toBeDefined();
            });
        })));

    describe('For: ngOnInit', () => {
        it('Should call HeroService.getHeroes()', async(inject([TestComponentBuilder],
            (tcb:TestComponentBuilder) => {
                tcb.createAsync(DashboardComponent).then((fixture) => {
                    spyOn(fixture.componentInstance._heroService, 'getHeroes').and.callThrough();

                    fixture.componentInstance.gotoDetail({id: 11});

                    fixture.detectChanges();

                    expect(fixture.componentInstance._heroService.getHeroes).toHaveBeenCalled();
                });
            })));

        it('Should set this.heroes to the first 5 heroes', async(inject([TestComponentBuilder],
            (tcb:TestComponentBuilder) => {
                tcb.createAsync(DashboardComponent).then((fixture) => {
                    fixture.componentInstance.ngOnInit();

                    fixture.detectChanges();

                    let heroes = fixture.componentInstance.heroes;
                    expect(heroes.length).toEqual(5);
                });
            })));
    });

    describe('For: gotoDetail', () => {
        it('Should call Router.navigate()', async(inject([TestComponentBuilder],
            (tcb:TestComponentBuilder) => {
                tcb.createAsync(DashboardComponent).then((fixture) => {
                    spyOn(fixture.componentInstance._router, 'navigate').and.callThrough();

                    fixture.componentInstance.gotoDetail({id: 11});

                    fixture.detectChanges();

                    expect(fixture.componentInstance._router.navigate).toHaveBeenCalled();
                });
            })));
    });
});
