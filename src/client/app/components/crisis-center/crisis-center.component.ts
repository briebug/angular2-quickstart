import {Component, OnInit} from '@angular/core';
import { Router, RouteConfig, RouterOutlet } from '@angular/router-deprecated';

import {CrisisNavComponent} from './crisis-nav/crisis-nav.component';
import {CrisisListComponent} from './crisis-list/crisis-list.component';
import {CrisisDetailComponent} from './crisis-detail/crisis-detail.component';
import {CrisisService} from '../../services/crisis.service';
import {HighlightDirective} from '../../directives/highlight.directive';

@Component({
    templateUrl:  'app/components/crisis-center/crisis-center.component.html',
    directives: [RouterOutlet, CrisisNavComponent, HighlightDirective],
    providers:  [CrisisService]
})

@RouteConfig([
    {path:'/list',    name: 'CrisisList',   component: CrisisListComponent, useAsDefault: true},
    {path:'/detail/:id', name: 'CrisisDetail', component: CrisisDetailComponent}
])

export class CrisisCenterComponent { }
