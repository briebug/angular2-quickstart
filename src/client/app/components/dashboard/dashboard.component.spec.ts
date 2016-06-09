import {
    async,
    beforeEach,
    it,
    describe,
    expect,
    inject,
    beforeEachProviders,
} from '@angular/core/testing';

import {TestComponentBuilder} from '@angular/compiler/testing';
import { Component } from '@angular/core';

import {provide} from '@angular/core';

import {DashboardComponent} from './dashboard.component';

import {HeroService} from '../../services/hero.service';
import {HeroServiceMock} from '../../../test-helpers/HeroServiceMock';

@Component({
    selector: 'as-test',
    template: '<my-dashboard></my-dashboard>',
    directives: [DashboardComponent]
})
class TestComponent {

}

describe('Dashboard Component: ', () => {

    beforeEachProviders(() => {
        provide(HeroService, {useClass: HeroServiceMock});
    });
    
        it('should grab heroes from service', async(inject([TestComponentBuilder],
            (tcb: TestComponentBuilder) => {
                tcb.createAsync(TestComponent).then((fixture) => {
                    fixture.detectChanges();

                    let compiled = fixture.debugElement.nativeElement;
                    expect(compiled).toBeDefined();
            });
        })));
    });
