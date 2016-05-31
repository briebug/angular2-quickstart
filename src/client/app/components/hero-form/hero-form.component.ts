import {Component, Input} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';
import {NgForm}    from '@angular/common';
import { Hero }    from '../../models/hero';

@Component({
    selector: 'hero-form',
    templateUrl: 'app/components/hero-form/hero-form.component.html',
    styleUrls: ['app/components/hero-form/hero-form.component.css'],
    directives: [FORM_DIRECTIVES]
})

export class HeroFormComponent {
    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];

    @Input('hero') model: Hero;

    submitted = false;

    onSubmit() {
        this.submitted = true;
    }

    // Reset the form with a new hero AND restore 'pristine' class state
    // by toggling 'active' flag which causes the form
    // to be removed/re-added in a tick via NgIf
    // TODO: Workaround until NgForm has a reset method (#6822)
    active = true;

    newHero() {
        this.model = new Hero(42, '', '');
        this.active = false;
        setTimeout(()=> this.active=true, 0);
    }
}
