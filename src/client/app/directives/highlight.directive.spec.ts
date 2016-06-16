import {
    expect,
    it, xit, fit,
    describe, xdescribe, fdescribe,
    beforeEach, afterEach,
    inject,
    beforeEachProviders
} from '@angular/core/testing';

import {provide} from '@angular/core';

import {HighlightDirective} from './highlight.directive';

import {ElementRef} from '@angular/core';

describe('Directive: Highlight', () => {
    beforeEachProviders(() => [
        provide(ElementRef, {useClass: class mock {
            nativeElement = {
                innerHTML: 'test html',
                style: {
                    backgroundColor: ''
                }
            };
        }}),

        HighlightDirective
    ]);
    
    it('Should create the directive', inject([HighlightDirective],
        (directive: HighlightDirective) => {
            expect(directive).toBeDefined();
        }));

    it('Should create _defaultColor properly', inject([HighlightDirective],
        (directive: HighlightDirective) => {
            expect((<any>directive)._defaultColor).toBe('red');
        }));

    describe('For: onMouseEnter()', () => {
        it('Should call this._highlight with this.highlightColor', inject([HighlightDirective],
            (directive: HighlightDirective) => {
                spyOn((<any>directive), '_highlight');

                // Simulate @Input('my-highlight')
                directive.highlightColor = 'green';

                directive.onMouseEnter();

                expect((<any>directive)._highlight).toHaveBeenCalledWith('green');
            }));

        it('Should call this._highlight with this._defaultColor', inject([HighlightDirective],
            (directive: HighlightDirective) => {
                spyOn((<any>directive), '_highlight');

                // Simulate @Input('my-highlight') with no result
                directive.highlightColor = null;

                directive.onMouseEnter();

                expect((<any>directive)._highlight).toHaveBeenCalledWith('red');
            }));
    });

    describe('For: onMouseLeave()', () => {
        it('Should call this._highlight with null', inject([HighlightDirective],
            (directive: HighlightDirective) => {
                spyOn((<any>directive), '_highlight');

                directive.onMouseLeave();

                expect((<any>directive)._highlight).toHaveBeenCalledWith(null);
            }));
    });

    describe('For: onClick()', () => {
        it('Should call alert properly', inject([HighlightDirective],
            (directive: HighlightDirective) => {
                spyOn(window, 'alert');

                directive.onClick();

                expect(window.alert).toHaveBeenCalledWith('test html');
            }));
    });

    describe('For: _highlight()', () => {
        it('Should set the background color properly', inject([HighlightDirective],
            (directive: HighlightDirective) => {
                (<any>directive)._highlight('green');

                expect((<any>directive)._el.style.backgroundColor).toBe('green');
            }));
    });
});