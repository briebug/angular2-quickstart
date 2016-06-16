import {
    expect,
    it, xit, fit,
    describe, xdescribe, fdescribe,
    beforeEach, afterEach,
    inject,
    beforeEachProviders
} from '@angular/core/testing';

import {provide} from '@angular/core';

import {CrisisCenterComponent} from './crisis-center.component';

import {Router} from '@angular/router-deprecated';
import {RouterMock} from '../../../test-helpers/RouterMock';

import {CrisisService} from '../../services/crisis.service';
import {CrisisServiceMock} from '../../../test-helpers/CrisisServiceMock';

describe('Component: CrisisCenter', () => {
    beforeEachProviders(() => [
        provide(Router, {useClass: RouterMock}),
        provide(CrisisService, {useClass: CrisisServiceMock}),

        CrisisCenterComponent
    ]);

    it('Should create the component', inject([CrisisCenterComponent],
        (component: CrisisCenterComponent) => {
            expect(component).toBeDefined();
        }));
});