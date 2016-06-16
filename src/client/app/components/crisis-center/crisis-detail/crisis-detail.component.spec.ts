import {
    expect,
    it, xit, fit,
    describe, xdescribe, fdescribe,
    beforeEach, afterEach,
    inject,
    beforeEachProviders
} from '@angular/core/testing';

import {provide} from '@angular/core';

import {CrisisDetailComponent} from './crisis-detail.component';

describe('Component: CrisisDetail', () => {
    beforeEachProviders(() => [
        CrisisDetailComponent
    ]);

    it('Should create the component', inject([CrisisDetailComponent],
        (component: CrisisDetailComponent) => {
            expect(component).toBeDefined();
        }));
});