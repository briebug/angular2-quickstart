System.register(['angular2/core', 'angular2/router', './crisis-nav/crisis-nav.component', './crisis-list/crisis-list.component', './crisis-detail/crisis-detail.component', '../../services/crisis.service', '../../directives/highlight.directive'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, crisis_nav_component_1, crisis_list_component_1, crisis_detail_component_1, crisis_service_1, highlight_directive_1;
    var CrisisCenterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (crisis_nav_component_1_1) {
                crisis_nav_component_1 = crisis_nav_component_1_1;
            },
            function (crisis_list_component_1_1) {
                crisis_list_component_1 = crisis_list_component_1_1;
            },
            function (crisis_detail_component_1_1) {
                crisis_detail_component_1 = crisis_detail_component_1_1;
            },
            function (crisis_service_1_1) {
                crisis_service_1 = crisis_service_1_1;
            },
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
            }],
        execute: function() {
            CrisisCenterComponent = (function () {
                function CrisisCenterComponent() {
                }
                CrisisCenterComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/components/crisis-center/crisis-center.component.html',
                        directives: [router_1.RouterOutlet, crisis_nav_component_1.CrisisNavComponent, highlight_directive_1.HighlightDirective],
                        providers: [crisis_service_1.CrisisService]
                    }),
                    router_1.RouteConfig([
                        { path: '/list', name: 'CrisisList', component: crisis_list_component_1.CrisisListComponent, useAsDefault: true },
                        { path: '/detail/:id', name: 'CrisisDetail', component: crisis_detail_component_1.CrisisDetailComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], CrisisCenterComponent);
                return CrisisCenterComponent;
            }());
            exports_1("CrisisCenterComponent", CrisisCenterComponent);
        }
    }
});
//# sourceMappingURL=crisis-center.component.js.map