webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routableComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_components_shot_list_shot_list_component__ = __webpack_require__("./src/app/shared/components/shot-list/shot-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_components_shot_details_shot_details_component__ = __webpack_require__("./src/app/shared/components/shot-details/shot-details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', pathMatch: 'full', redirectTo: '', component: __WEBPACK_IMPORTED_MODULE_2__shared_components_shot_list_shot_list_component__["a" /* ShotListComponent */] },
    { path: 'shot/:id', component: __WEBPACK_IMPORTED_MODULE_3__shared_components_shot_details_shot_details_component__["a" /* ShotDetailsComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routableComponents = [
    __WEBPACK_IMPORTED_MODULE_2__shared_components_shot_list_shot_list_component__["a" /* ShotListComponent */],
    __WEBPACK_IMPORTED_MODULE_3__shared_components_shot_details_shot_details_component__["a" /* ShotDetailsComponent */]
];


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<nav class=\"navbar navbar-default\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">      \r\n      <a class=\"navbar-brand\" href=\"#\">{{ title }}</a>\r\n    </div>    \r\n  </div>\r\n</nav>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Health Dashboard';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_components_shot_list_shot_list_component__ = __webpack_require__("./src/app/shared/components/shot-list/shot-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_components_shot_shot_component__ = __webpack_require__("./src/app/shared/components/shot/shot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_components_placeholder_placeholder_component__ = __webpack_require__("./src/app/shared/components/placeholder/placeholder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_shot_service__ = __webpack_require__("./src/app/shared/services/shot.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_placeholder_service__ = __webpack_require__("./src/app/shared/services/placeholder.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// angular modules



// app modules

// app components




// app services


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__shared_components_shot_list_shot_list_component__["a" /* ShotListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__shared_components_shot_shot_component__["a" /* ShotComponent */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["b" /* routableComponents */],
                __WEBPACK_IMPORTED_MODULE_7__shared_components_placeholder_placeholder_component__["a" /* PlaceholderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__shared_services_shot_service__["a" /* ShotService */],
                __WEBPACK_IMPORTED_MODULE_9__shared_services_placeholder_service__["a" /* PlaceholderService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/components/placeholder/placeholder.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"placeholder-container\">\r\n  <img class=\"placeholder-img\" src=\"{{placeholder.thumbnailUrl}}\" />\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/placeholder/placeholder.component.less":
/***/ (function(module, exports) {

module.exports = ".tile-box-shadow {\n  -webkit-box-shadow: 0px 0px 12px 1px #ababab;\n  box-shadow: 0px 0px 12px 1px #ababab;\n}\n.placeholder-container {\n  position: relative;\n  width: 224px;\n  height: 186px;\n  margin: 0 auto 1em auto;\n  background-color: #fff;\n  padding: 12px 12px 24px 12px;\n  -webkit-box-shadow: 0px 0px 12px 1px #ababab;\n  box-shadow: 0px 0px 12px 1px #ababab;\n}\n.placeholder-container .placeholder-img {\n  margin: 0 auto;\n  display: block;\n}\n"

/***/ }),

/***/ "./src/app/shared/components/placeholder/placeholder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceholderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlaceholderComponent = /** @class */ (function () {
    function PlaceholderComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PlaceholderComponent.prototype, "placeholder", void 0);
    PlaceholderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'placeholder',
            template: __webpack_require__("./src/app/shared/components/placeholder/placeholder.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/placeholder/placeholder.component.less")]
        })
    ], PlaceholderComponent);
    return PlaceholderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/shot-details/shot-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container shot-details\" *ngIf=\"shotDetails\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n      <a href=\"\" [routerLink]=\"['/']\" class=\"back-button\">\r\n        <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\r\n        back\r\n      </a>      \r\n    </div>\r\n  </div>\r\n  <br />\r\n  <div class=\"details-container\">\r\n    <div class=\"row\">\r\n      <div class=\"img-container\">\r\n        <img src=\"{{shotDetails.ImageUrl}}\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-1 col-md-offset-2\"><img class=\"avatar\" src=\"{{shotDetails.Avatar}}\" /></div>\r\n      <div class=\"col-md-3\">\r\n        <h3 class=\"title\">{{shotDetails.Title}}</h3>\r\n        By <span class=\"author\">{{shotDetails.AuthorName}}</span>\r\n      </div>\r\n      <div class=\"col-md-offset-2 col-md-9\">\r\n        <div class=\"description\">{{shotDetails.Description}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/shot-details/shot-details.component.less":
/***/ (function(module, exports) {

module.exports = ".tile-box-shadow {\n  -webkit-box-shadow: 0px 0px 12px 1px #ababab;\n  box-shadow: 0px 0px 12px 1px #ababab;\n}\n.shot-details .back-button {\n  font-size: 1.3em;\n}\n.shot-details .back-button:hover {\n  text-decoration: none;\n}\n.shot-details .details-container {\n  background-color: #eaeaea;\n  padding: 2em;\n}\n.shot-details .details-container .img-container {\n  position: relative;\n  width: 824px;\n  height: 636px;\n  margin: 0 auto 1em auto;\n  background-color: #fff;\n  padding: 12px 12px 24px 12px;\n  -webkit-box-shadow: 0px 0px 12px 1px #ababab;\n  box-shadow: 0px 0px 12px 1px #ababab;\n}\n.shot-details .details-container .avatar {\n  border-radius: 50%;\n}\n.shot-details .details-container .title {\n  margin-top: 0;\n}\n.shot-details .details-container .author {\n  color: #3a8bbb;\n  font-size: 1.3em;\n}\n.shot-details .details-container .description {\n  margin-top: 1em;\n}\n@media (max-width: 576px) {\n  .shot-details .details-container .img-container {\n    width: auto;\n    height: auto;\n  }\n  .shot-details .details-container .img-container img {\n    width: 100%;\n  }\n}\n@media (max-width: 576px) {\n  .shot-details .details-container .img-container {\n    width: auto;\n    height: auto;\n  }\n  .shot-details .details-container .img-container img {\n    width: 100%;\n  }\n}\n@media (max-width: 768px) {\n  .shot-details .details-container .img-container {\n    width: auto;\n    height: auto;\n  }\n  .shot-details .details-container .img-container img {\n    width: 100%;\n  }\n}\n"

/***/ }),

/***/ "./src/app/shared/components/shot-details/shot-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShotDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shot_service__ = __webpack_require__("./src/app/shared/services/shot.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShotDetailsComponent = /** @class */ (function () {
    function ShotDetailsComponent(route, shotService) {
        this.route = route;
        this.shotService = shotService;
    }
    ShotDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getDetails();
        this.route.params.map(function (params) { return params['id']; })
            .do(function (id) { return _this.id = parseInt(id, 10); })
            .subscribe(function (id) { return _this.getDetails(); });
    };
    ShotDetailsComponent.prototype.getDetails = function () {
        var _this = this;
        this.shotService.getShotDetails(this.id)
            .subscribe(function (result) { return _this.shotDetails = result; });
    };
    ShotDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'shot-details',
            template: __webpack_require__("./src/app/shared/components/shot-details/shot-details.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/shot-details/shot-details.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_shot_service__["a" /* ShotService */]])
    ], ShotDetailsComponent);
    return ShotDetailsComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/shot-list/shot-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container shot-list-container\">\r\n  <div class=\"row\" *ngFor=\"let row of shotsGrid\">\r\n    <div class=\"col-md-4 shot-container\" *ngFor=\"let shot of row\">\r\n      <shot [shot]=\"shot\"\r\n            (mouseenter)=\"showDetails(shot.Id)\"\r\n            (mouseleave)=\"hideDetails(shot.Id)\"\r\n            class=\"shot\"></shot>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"row\" *ngFor=\"let row of placeholdersGrid\">\r\n    <div class=\"col-md-4 placeholder-container\" *ngFor=\"let placeholder of row\">\r\n      <placeholder [placeholder]=\"placeholder\"\r\n                   class=\"placeholder\"></placeholder>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/components/shot-list/shot-list.component.less":
/***/ (function(module, exports) {

module.exports = ".shot-list-container {\n  background-color: #eaeaea;\n  padding: 2em;\n}\n.shot-list-container .shot-container {\n  margin-bottom: 1em;\n}\n.shot-list-container .shot-container .shot {\n  width: 200px;\n  display: block;\n  margin: 0 auto;\n}\n.shot-list-container .placeholder {\n  width: 200px;\n  display: block;\n  margin: 0 auto;\n}\n@media (max-width: 576px) {\n  .shot-list-container .shot-container .shot {\n    width: 235px;\n  }\n  .shot-list-container .placeholder-container {\n    margin-left: -10px;\n  }\n  .shot-list-container .placeholder-container .placeholder {\n    width: 235px;\n  }\n}\n"

/***/ }),

/***/ "./src/app/shared/components/shot-list/shot-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShotListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shot_service__ = __webpack_require__("./src/app/shared/services/shot.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_placeholder_service__ = __webpack_require__("./src/app/shared/services/placeholder.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShotListComponent = /** @class */ (function () {
    function ShotListComponent(shotService, placeholderService) {
        this.shotService = shotService;
        this.placeholderService = placeholderService;
    }
    ShotListComponent.prototype.ngOnInit = function () {
        this.getShots();
        this.getPlaceholders();
    };
    ShotListComponent.prototype.showDetails = function (id) {
        this.findShot(id).ShowDetails = true;
    };
    ShotListComponent.prototype.hideDetails = function (id) {
        this.findShot(id).ShowDetails = false;
    };
    ShotListComponent.prototype.getShots = function () {
        var _this = this;
        this.shotService.getShots()
            .subscribe(function (result) { return _this.shotsGrid = _this.buildGrid(result, 3); });
    };
    ShotListComponent.prototype.getPlaceholders = function () {
        var _this = this;
        this.placeholderService.getPlaceholder()
            .subscribe(function (result) { return _this.placeholdersGrid = _this.buildGrid(result, 3); });
    };
    ShotListComponent.prototype.buildGrid = function (list, columns) {
        // trim the list to 10 items for the sake of brevity
        if (list.length > 10) {
            list = list.splice(0, 10);
        }
        var grid = [];
        for (var i = 0; i < list.length; i += columns) {
            var row = [];
            for (var j = 0; j < columns; j++) {
                var value = list[i + j];
                if (!value) {
                    break;
                }
                row.push(value);
            }
            grid.push(row);
        }
        return grid;
    };
    ShotListComponent.prototype.findShot = function (id) {
        // flatten shotGrid to 1d array for filtering
        var shotsList = [].concat.apply([], this.shotsGrid);
        return shotsList.filter(function (shot) { return shot.Id == id; })[0];
    };
    ShotListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'shot-list',
            template: __webpack_require__("./src/app/shared/components/shot-list/shot-list.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/shot-list/shot-list.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_shot_service__["a" /* ShotService */], __WEBPACK_IMPORTED_MODULE_2__services_placeholder_service__["a" /* PlaceholderService */]])
    ], ShotListComponent);
    return ShotListComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/shot/shot.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"shot-container\">\r\n  <img src=\"{{shot.ThumbnailUrl}}\" class=\"thumbnail-image\" />\r\n  <a href=\"\" [routerLink]=\"['/shot', shot.Id]\" class=\"shot-details\" *ngIf=\"shot.ShowDetails == true\">\r\n    <h4>{{shot.Title}}</h4>\r\n    <div *ngIf=\"shot.Description.length < 70\">{{shot.Description}}</div>\r\n    <div *ngIf=\"shot.Description.length >= 70\">{{shot.Description | slice:0: 55}}...</div>\r\n    <br />\r\n    <div class=\"shot-date\">{{shot.PublishedDate | date: medium}}</div>\r\n  </a>  \r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/shot/shot.component.less":
/***/ (function(module, exports) {

module.exports = ".tile-box-shadow {\n  -webkit-box-shadow: 0px 0px 12px 1px #ababab;\n  box-shadow: 0px 0px 12px 1px #ababab;\n}\n.shot-container {\n  position: relative;\n  width: 224px;\n  height: 186px;\n  background-color: #fff;\n  padding: 12px 12px 24px 12px;\n  -webkit-box-shadow: 0px 0px 12px 1px #ababab;\n  box-shadow: 0px 0px 12px 1px #ababab;\n}\n.shot-container .thumbnail-image {\n  width: 200px;\n  height: 150px;\n}\n.shot-container .shot-details {\n  position: absolute;\n  top: 12px;\n  width: 200px;\n  height: 150px;\n  background-color: rgba(255, 255, 255, 0.8);\n  padding: 3px;\n  text-decoration: none;\n}\n.shot-container .shot-date {\n  color: #3a8bbb;\n}\n"

/***/ }),

/***/ "./src/app/shared/components/shot/shot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShotComponent = /** @class */ (function () {
    function ShotComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ShotComponent.prototype, "shot", void 0);
    ShotComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'shot',
            template: __webpack_require__("./src/app/shared/components/shot/shot.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/shot/shot.component.less")]
        })
    ], ShotComponent);
    return ShotComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/placeholder.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceholderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PlaceholderService = /** @class */ (function () {
    function PlaceholderService(http) {
        this.http = http;
    }
    PlaceholderService.prototype.getPlaceholder = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/photos/')
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    PlaceholderService.prototype.handleError = function (error) {
        var msg = "Status code " + error.status + " on url " + error;
        console.log(msg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(msg);
    };
    PlaceholderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], PlaceholderService);
    return PlaceholderService;
}());



/***/ }),

/***/ "./src/app/shared/services/shot.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShotService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShotService = /** @class */ (function () {
    function ShotService(http) {
        var _this = this;
        this.http = http;
        this.getShots = function () {
            return _this.http.get('genesis-technical-assessment/assets/shots.json')
                .map(function (response) { return response.json().data; })
                .catch(_this.handleError);
        };
        this.getShotDetails = function (id) {
            return _this.http.get('genesis-technical-assessment/assets/shot-details.json')
                .map(function (response) {
                var data = response.json().data;
                return data.filter(function (shot) { return shot.Id === id; })[0];
            })
                .catch(_this.handleError);
        };
    }
    ShotService.prototype.handleError = function (error) {
        console.error(error);
        var msg = "Error status code " + error.status + " at " + error.url;
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(msg);
    };
    ShotService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ShotService);
    return ShotService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map