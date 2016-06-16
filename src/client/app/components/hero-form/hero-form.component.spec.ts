import {
    expect,
    it, xit, fit,
    describe, xdescribe, fdescribe,
    beforeEach, afterEach,
    inject,
    beforeEachProviders,
} from '@angular/core/testing';

import {provide} from '@angular/core';

import {HeroFormComponent} from './hero-form.component';

describe('Component: HeroForm', () => {
    beforeEachProviders(() => [
        HeroFormComponent
    ]);

    it('Should create the component', inject([HeroFormComponent],
        (component: HeroFormComponent) => {;
            expect(component).toBeDefined();
        }));

    it('Should create powers properly', inject([HeroFormComponent],
        (component: HeroFormComponent) => {
            expect(component.powers.length).toBe(4);
        }));

    describe('For: onSubmit()', () => {
        it('Should set this.submitted to true', inject([HeroFormComponent],
            (component: HeroFormComponent) => {
                component.onSubmit();

                expect(component.submitted).toBeTruthy();
            }));
    });

    describe('For: newHero()', () => {
        it('Should set this.model to a new Hero()', inject([HeroFormComponent],
            (component: HeroFormComponent) => {
                component.newHero();

                let model = component.model;
                expect(model.id).toBe(42);
                expect(model.name).toBe('');
                expect(model.power).toBe('');
            }));

        it('Should set this.active to false', inject([HeroFormComponent],
            (component: HeroFormComponent) => {
                component.newHero();

                expect(component.active).toBeFalsy();
            }));
    });
});