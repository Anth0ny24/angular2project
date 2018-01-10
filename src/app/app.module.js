"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var home_module_1 = require("./home/home.module");
var restaurant_list_component_1 = require("./restaurant/restaurant-list.component");
var restaurant_details_component_1 = require("./restaurant/restaurant-details.component");
var restaurant_module_1 = require("./restaurant/restaurant.module");
var hobbies_list_component_1 = require("./hobbies/hobbies-list.component");
var hobbies_module_1 = require("./hobbies/hobbies.module");
var bars_list_component_1 = require("./bar/bars-list.component");
var bar_module_1 = require("./bar/bar.module");
var pageNotFound_component_1 = require("./404/pageNotFound.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            http_1.HttpModule,
            home_module_1.HomeModule,
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
        declarations: [app_component_1.AppComponent, pageNotFound_component_1.PageNotFoundComponent, restaurant_details_component_1.RestaurantDetailsComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map