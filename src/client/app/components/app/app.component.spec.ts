// Import testing functions
import {
    expect,
    it, xit, fit,
    describe, xdescribe, fdescribe,
    beforeEach, afterEach,
    inject,
    beforeEachProviders,
} from '@angular/core/testing';

// Import required items for testing
import {provide} from '@angular/core';

// Import the component being tested
import {AppComponent} from './app.component';

describe('Component: App', () => {
    beforeEachProviders(() => [
        AppComponent
    ]);

    it('Should create the component', inject([AppComponent],
        (component: AppComponent) => {
            expect(component).toBeDefined();
        }));

    it('Should set the title correctly', inject([AppComponent],
        (component: AppComponent) => {
            expect(component.title).toBe('Tour of Heroes');
        }));
});
