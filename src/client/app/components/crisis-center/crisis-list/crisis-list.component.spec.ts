import {
    expect,
    it, xit, fit,
    describe, xdescribe, fdescribe,
    beforeEach, afterEach,
    inject,
    beforeEachProviders
} from '@angular/core/testing';

import {provide} from '@angular/core';

import {CrisisListComponent} from './crisis-list.component';

describe('Component: CrisisList', () => {
    beforeEachProviders(() => [
        CrisisListComponent
    ]);

    it('Should create the component', inject([CrisisListComponent],
        (component: CrisisListComponent) => {
            expect(component).toBeDefined();
        }));
});