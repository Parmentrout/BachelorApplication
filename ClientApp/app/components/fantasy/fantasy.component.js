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
var FantasyComponent = (function () {
    function FantasyComponent(http) {
        this.http = http;
    }
    FantasyComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.http.get('/api/SampleData/GetUsers').subscribe(function (result) {
            _this.fantasyUsers = result.json();
            for (var _i = 0, _a = _this.fantasyUsers; _i < _a.length; _i++) {
                var user = _a[_i];
                console.log(user);
            }
        });
    };
    return FantasyComponent;
}());
FantasyComponent = __decorate([
    core_1.Component({
        selector: 'fantasy',
        template: require('./fantasy.component.html')
    }),
    __metadata("design:paramtypes", [http_1.Http])
], FantasyComponent);
exports.FantasyComponent = FantasyComponent;
//# sourceMappingURL=fantasy.component.js.map