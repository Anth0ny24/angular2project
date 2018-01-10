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
var material_1 = require("@angular/material");
/**
 * @title Dialog with header, scrollable content and actions
 */
var DialogContentExample = (function () {
    function DialogContentExample(dialog) {
        this.dialog = dialog;
    }
    DialogContentExample.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(DialogContentExampleDialog, {
            height: '350px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    return DialogContentExample;
}());
DialogContentExample = __decorate([
    core_1.Component({
        selector: 'dialog-content-example',
        templateUrl: 'restaurant-details.component.html'
    }),
    __metadata("design:paramtypes", [material_1.MatDialog])
], DialogContentExample);
exports.DialogContentExample = DialogContentExample;
var DialogContentExampleDialog = (function () {
    function DialogContentExampleDialog() {
    }
    return DialogContentExampleDialog;
}());
DialogContentExampleDialog = __decorate([
    core_1.Component({
        selector: 'dialog-content-example-dialog',
        templateUrl: 'dialog-content-example-dialog.html',
    })
], DialogContentExampleDialog);
exports.DialogContentExampleDialog = DialogContentExampleDialog;
/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 
//# sourceMappingURL=dialog-content.component.js.map