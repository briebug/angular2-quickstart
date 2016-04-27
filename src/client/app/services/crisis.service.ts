import {Injectable} from 'angular2/core';
import {Crisis} from '../models/crisis';
import {CRISIS} from '../mocks/mock-crisis';

@Injectable()
export class CrisisService {
    getCrisises() {
        return Promise.resolve(CRISIS);
    }

    getCrisis(id:number) {
        return Promise.resolve(CRISIS).then(
                crisis => crisis.filter(crisis => crisis.id === id)[0]
        );
    }

    getCrisisSlowly() {
        return new Promise<Crisis[]>(resolve =>
                setTimeout(()=>resolve(CRISIS), 2000) // 2 seconds
        );
    }
}


