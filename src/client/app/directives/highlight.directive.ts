import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
    selector: '[my-highlight]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()',
        '(click)': 'onClick()'
    }
})

export class HighlightDirective {
    private _defaultColor = 'red';
    private _el:HTMLElement;

    @Input('my-highlight') highlightColor: string;

    constructor(el: ElementRef) {
        this._el = el.nativeElement;
    }

    onMouseEnter() { this._highlight(this.highlightColor || this._defaultColor); }
    onMouseLeave() { this._highlight(null); }
    onClick() {alert(this._el.innerHTML);}

    private _highlight(color: string) {
        this._el.style.backgroundColor = color;
    }
}