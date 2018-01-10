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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do"); // il se contente de regarder à l'intérieur de ce qui est retourné par GET
require("rxjs/add/observable/of");
require("rxjs/add/operator/catch");
var RestaurantServices = (function () {
    function RestaurantServices(http) {
        this.http = http;
        this.url = 'app/api/restaurant.json';
    }
    /********************************************************************************************************************/
    // propriété qui servira de cache
    // les données sont-elles déjà en cache ??
    // oui en cache, retourne les données sous forme d'observable
    // non pas en cache, une requête est-elle en chemin
    // si pas de données en cache et pas de requêtes en cours, requête au service web
    RestaurantServices.prototype.getRestaurantFromAPIWithCache = function () {
        var _this = this;
        if (this.data) {
            return Observable_1.Observable.of(this.data);
        }
        else if (this.observable) {
            return this.observable;
        }
        else {
            this.observable = this.http
                .get(this.url)
                .map(function (res) { return res.json(); })
                .map(function (response) {
                _this.observable = null;
                _this.data = response;
                return _this.data;
            })
                .catch(function (error) {
                var errorMsg = 'une erreur ${error.status} est survenu en tentant de joindre ${error.url}';
                return Observable_1.Observable.throw(errorMsg);
            });
            return this.observable;
        }
    };
    RestaurantServices.prototype.getRestaurantById = function (id) {
        if (!this.data) {
            return undefined;
        }
        var result = this.data.result.filter(function (resto) { return resto.id === id; });
        alert("Dans restoServices: " + result);
        console.log("Dans restoServices: " + result);
        if (result.length > 0) {
            return result[0]; // recupère le premier élément du tableau
        }
    };
    return RestaurantServices;
}());
RestaurantServices = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], RestaurantServices);
exports.RestaurantServices = RestaurantServices;
//# sourceMappingURL=restaurant.services.js.map