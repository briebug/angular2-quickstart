import {
    expect,
    it, xit, fit,
    describe, xdescribe, fdescribe,
    beforeEach, afterEach,
    inject,
    beforeEachProviders
} from '@angular/core/testing';

import {provide} from '@angular/core';

import {CrisisNavComponent} from './crisis-nav.component';

describe('Component: CrisisNav', () => {
    beforeEachProviders(() => [
        CrisisNavComponent
    ]);

    it('Should create the component', inject([CrisisNavComponent],
        (component: CrisisNavComponent) => {
            expect(component).toBeDefined();
        }));
});