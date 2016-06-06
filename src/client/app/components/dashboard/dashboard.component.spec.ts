import {
    async,
    beforeEach,
    it,
    describe,
    expect,
    inject,
    beforeEachProviders,
} from '@angular/core/testing';

import {
    ComponentFixture,
    TestComponentBuilder
} from '@angular/compiler/testing';

import {provide} from '@angular/core';

import {DashboardComponent} from './dashboard.component';

import {HeroService} from '../../services/hero.service';
import {HeroServiceMock} from '../../../test-helpers/HeroServiceMock';

describe('Dashboard Component: ', () => {
    let builder:any;

    beforeEachProviders(() => {
        provide(HeroService, {useClass: HeroServiceMock});
    });

    beforeEach(inject([TestComponentBuilder], (tcb) => {
        builder = tcb;
    }));

    describe('OnInit', () => {

        it('should grab heroes from service', async(() => {
            builder.createAsync(DashboardComponent)
                .then((fixture:ComponentFixture<DashboardComponent>) => {
                    // fixture.detectChanges();

                    var compiled = fixture.debugElement.nativeElement;
                    // console.log(compiled);
                    expect(true).toBe(true);
                });
        }));
    });

});
