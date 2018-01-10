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
var hobbies_list_component_1 = require("./hobbies-list.component");
var hobbies_services_1 = require("./services/hobbies.services");
var hobbies_summary_component_1 = require("./hobbies-summary.component");
var HobbieModule = (function () {
    function HobbieModule() {
    }
    return HobbieModule;
}());
HobbieModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, router_1.RouterModule],
        declarations: [hobbies_list_component_1.HobbiesListComponent, hobbies_summary_component_1.HobbiesSummaryComponent],
        exports: [hobbies_list_component_1.HobbiesListComponent],
        providers: [hobbies_services_1.HobbiesServices] // DECLARER DES SERVICES
    })
], HobbieModule);
exports.HobbieModule = HobbieModule;
//# sourceMappingURL=hobbies.module.js.map