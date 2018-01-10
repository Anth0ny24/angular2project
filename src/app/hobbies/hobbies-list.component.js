"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var hobbies_services_1 = require("./services/hobbies.services");
var HobbiesListComponent = (function () {
    function HobbiesListComponent(_hobbyServices) {
        this._hobbyServices = _hobbyServices;
        this.errorMsg = "";
    }
    HobbiesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this._hobbyServices.getHobbiesFromAPIWithCache()
            .subscribe(function (res) { return _this.hobbies = res; }, function (err) { return _this.errorMsg = err; });
        console.log(this._hobbyServices);
    };
    return HobbiesListComponent;
}());
HobbiesListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: "hobbies-list.component.html",
    }),
    __metadata("design:paramtypes", [hobbies_services_1.HobbiesServices])
], HobbiesListComponent);
exports.HobbiesListComponent = HobbiesListComponent;
//# sourceMappingURL=hobbies-list.component.js.map