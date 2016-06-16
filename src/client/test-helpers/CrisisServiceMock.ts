import {Injectable} from '@angular/core';

@Injectable()
export class CrisisServiceMock {

    Crisis:any = [
        {"id": 1, "name": "Hurricane"},
        {"id": 2, "name": "Armed Bandits"},
        {"id": 3, "name": "Nuclear Meltdown"}
    ];

    getCrisises() {
        return this.Crisis;
    }

    getCrisis(id:number) {
        // .then(
        //     heroes => heroes.filter(hero => hero.id === id)[0];
    }

    getCrisisSlowly() {
        this.Crisis = setTimeout(this.getCrisises(), 2000);
        return this.Crisis;
    }
}
