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
var contestants_service_1 = require("../../services/contestants.service");
var ContestantsComponent = (function () {
    function ContestantsComponent(http, _cService) {
        this.http = http;
        this._cService = _cService;
        this.checkBoxActive = false;
    }
    ContestantsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._cService.getContestants()
            .subscribe(function (result) { return _this.contestants = result; });
    };
    ContestantsComponent.prototype.toggleCheckbox = function () {
        this.checkBoxActive = !this.checkBoxActive;
    };
    ContestantsComponent.prototype.toggleContestant = function (contestant) {
        contestant.isActive = !contestant.isActive;
        contestant.hasChanged = true;
    };
    ContestantsComponent.prototype.saveChanges = function () {
        this._cService.saveContestants(this.contestants);
    };
    ContestantsComponent.prototype.saveFantasy = function (user, contestant) {
        this._cService.saveFantasy(user, contestant);
    };
    return ContestantsComponent;
}());
ContestantsComponent = __decorate([
    core_1.Component({
        selector: 'contestants',
        template: require('./contestants.component.html')
    }),
    __metadata("design:paramtypes", [http_1.Http, contestants_service_1.ContestantsService])
], ContestantsComponent);
exports.ContestantsComponent = ContestantsComponent;
//# sourceMappingURL=contestants.component.js.map