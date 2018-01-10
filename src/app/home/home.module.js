"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var restaurant_list_component_1 = require("./../restaurant/restaurant-list.component");
var restaurant_details_component_1 = require("./../restaurant/restaurant-details.component");
var restaurant_module_1 = require("./../restaurant/restaurant.module");
var hobbies_list_component_1 = require("./../hobbies/hobbies-list.component");
var hobbies_module_1 = require("./../hobbies/hobbies.module");
var bars_list_component_1 = require("./../bar/bars-list.component");
var bar_module_1 = require("./../bar/bar.module");
var pageNotFound_component_1 = require("./../404/pageNotFound.component");
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule,
            hobbies_module_1.HobbieModule,
            bar_module_1.BarModule,
            restaurant_module_1.RestaurantModule,
            router_1.RouterModule.forRoot([
                { path: 'home', component: home_component_1.HomeComponent },
                { path: 'hobbies', component: hobbies_list_component_1.HobbiesListComponent },
                { path: 'restaurant', component: restaurant_list_component_1.RestaurantListComponent },
                { path: 'restaurant/:id', component: restaurant_details_component_1.RestaurantDetailsComponent },
                { path: 'bar', component: bars_list_component_1.BarsListComponent },
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: '**', component: pageNotFound_component_1.PageNotFoundComponent, pathMatch: 'full' },
            ])],
        declarations: [home_component_1.HomeComponent],
        exports: [home_component_1.HomeComponent],
    })
], HomeModule);
exports.HomeModule = HomeModule;
//# sourceMappingURL=home.module.js.map