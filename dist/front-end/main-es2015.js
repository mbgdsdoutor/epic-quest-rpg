(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const AUTH_ROUTE = {
    path: 'auth',
    loadChildren: () => Promise.all(/*! import() | authentication-auth-module */[__webpack_require__.e("default~authentication-auth-module~in-session-in-session-module~out-of-session-out-of-session-module"), __webpack_require__.e("common"), __webpack_require__.e("authentication-auth-module")]).then(__webpack_require__.bind(null, /*! ./authentication/auth.module */ "./src/app/authentication/auth.module.ts")).then(m => m.AuthModule)
};
const OUT_OF_SESSION_ROUTE = {
    path: '',
    loadChildren: () => Promise.all(/*! import() | out-of-session-out-of-session-module */[__webpack_require__.e("default~authentication-auth-module~in-session-in-session-module~out-of-session-out-of-session-module"), __webpack_require__.e("default~in-session-in-session-module~out-of-session-out-of-session-module"), __webpack_require__.e("common"), __webpack_require__.e("out-of-session-out-of-session-module")]).then(__webpack_require__.bind(null, /*! ./out-of-session/out-of-session.module */ "./src/app/out-of-session/out-of-session.module.ts")).then(m => m.OutOfSessionModule)
};
const IN_SESSION_ROUTE = {
    path: '',
    loadChildren: () => Promise.all(/*! import() | in-session-in-session-module */[__webpack_require__.e("default~authentication-auth-module~in-session-in-session-module~out-of-session-out-of-session-module"), __webpack_require__.e("default~in-session-in-session-module~out-of-session-out-of-session-module"), __webpack_require__.e("in-session-in-session-module")]).then(__webpack_require__.bind(null, /*! ./in-session/in-session.module */ "./src/app/in-session/in-session.module.ts")).then(m => m.InSessionModule)
};
const routes = [
    { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
    AUTH_ROUTE,
    OUT_OF_SESSION_ROUTE,
    IN_SESSION_ROUTE
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/alert.component */ "./src/app/shared/alert.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_rules_rules_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/rules/rules.component */ "./src/app/shared/rules/rules.component.ts");





class AppComponent {
    constructor() {
        this.title = 'front-end';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "epic-alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rules");
    } }, directives: [_shared_alert_component__WEBPACK_IMPORTED_MODULE_1__["AlertComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shared_rules_rules_component__WEBPACK_IMPORTED_MODULE_3__["RulesComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/loading/loading.service */ "./src/app/shared/loading/loading.service.ts");
/* harmony import */ var _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/loading/loading.component */ "./src/app/shared/loading/loading.component.ts");
/* harmony import */ var _shared_alert_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/alert.component */ "./src/app/shared/alert.component.ts");
/* harmony import */ var _shared_rules_rules_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/rules/rules.component */ "./src/app/shared/rules/rules.component.ts");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_shared_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]], imports: [[
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _shared_alert_component__WEBPACK_IMPORTED_MODULE_8__["AlertComponent"],
        _shared_rules_rules_component__WEBPACK_IMPORTED_MODULE_9__["RulesComponent"]], imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _shared_alert_component__WEBPACK_IMPORTED_MODULE_8__["AlertComponent"],
                    _shared_rules_rules_component__WEBPACK_IMPORTED_MODULE_9__["RulesComponent"]
                ],
                imports: [
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production })
                ],
                providers: [_shared_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]],
                entryComponents: [
                    _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/alert.component.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/alert.component.ts ***!
  \*******************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ "./src/app/shared/alert.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function AlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_div_0_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const alert_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.removeAlert(alert_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.cssClass(alert_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.alertIcon(alert_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](alert_r1.message);
} }
class AlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
        this.alerts = [];
    }
    ngOnInit() {
        this.subscription = this.alertService.onAlert(this.id)
            .subscribe(alert => {
            if (!alert.message) {
                this.alerts = [];
                return;
            }
            this.alerts.push(alert);
            this.alertCountDown(alert);
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    alertCountDown(alert) {
        setTimeout(() => {
            this.removeAlert(alert);
        }, 4000);
    }
    removeAlert(alert) {
        this.alerts = this.alerts.filter(x => x !== alert);
    }
    alertIcon(alert) {
        if (!alert) {
            return;
        }
        switch (alert.type) {
            case _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Success:
                return 'check_circle';
            case _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Error:
                return 'error_outline';
            case _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Info:
                return 'info';
            case _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Warning:
                return 'warning';
        }
    }
    cssClass(alert) {
        if (!alert) {
            return;
        }
        switch (alert.type) {
            case _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Success:
                return 'alert alert-success';
            case _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Error:
                return 'alert alert-danger';
            case _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Info:
                return 'alert alert-info';
            case _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Warning:
                return 'alert alert-warning';
        }
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"])); };
AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["epic-alert"]], inputs: { id: "id" }, decls: 1, vars: 1, consts: [[3, "class", 4, "ngFor", "ngForOf"], [1, "material-icons"], [1, "close", 3, "click"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlertComponent_div_0_Template, 7, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.alerts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'epic-alert',
                template: `
    <div *ngFor="let alert of alerts" class="{{cssClass(alert)}}">
    <i class="material-icons">{{alertIcon(alert)}}</i>
        <p>{{alert.message}}</p>
        <a class="close" (click)="removeAlert(alert)">&times;</a>
    </div>
    `
            }]
    }], function () { return [{ type: _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/alert.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/alert.service.ts ***!
  \*****************************************/
/*! exports provided: AlertType, Alert, AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));
class Alert {
    constructor(init) {
        Object.assign(this, init);
    }
}
class AlertService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    onAlert(alertId) {
        return this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(x => x && x.alertId === alertId));
    }
    success(message, alertId) {
        this.alert(new Alert({ message, type: AlertType.Success, alertId }));
    }
    error(message, alertId) {
        this.alert(new Alert({ message, type: AlertType.Error, alertId }));
    }
    info(message, alertId) {
        this.alert(new Alert({ message, type: AlertType.Info, alertId }));
    }
    warn(message, alertId) {
        this.alert(new Alert({ message, type: AlertType.Warning, alertId }));
    }
    alert(alert) {
        this.subject.next(alert);
    }
    // clear alerts
    clear(alertId) {
        this.subject.next(new Alert({ alertId }));
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/loading/loading.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/loading/loading.component.ts ***!
  \*****************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoadingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["epic-loading"]], decls: 5, vars: 0, consts: [[1, "loading"], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "202.426px", "height", "184.119px", "viewBox", "0 0 202.426 184.119", "enable-background", "new 0 0 202.426 184.119", 0, "xml", "space", "preserve"], ["stroke", "#e95d33", "stroke-width", "3px", "x", "185.379", "y", "18.754", "fill", "#404040", "width", "16.959", "height", "18.072", 1, "st-0", "path"], ["stroke", "#e95d33", "stroke-width", "3px", "fill", "#404040", "d", "M202.426,91.498l-0.088-47.483h-16.85v1.389l0,0v46.298c-0.502,11.355-3.293,22.492-8.207,32.741\n  c-14.357,28.525-43.77,41.552-75.819,41.995c-31.113,0.451-53.401-11.914-67.656-28.445c-0.604-0.741-1.258-1.41-1.824-2.238\n  c-2.632-3.548-4.915-7.343-6.797-11.333c-2.355-4.979-4.158-10.199-5.387-15.563c-1.505-6.645-2.232-13.441-2.167-20.246\n  c0-13.347,2.13-24.621,6.397-33.824c0.792-1.716,1.621-3.322,2.516-4.921c7.479-13.601,16.37-24.767,39.64-31.389\n  c7.887-2.275,16.058-3.438,24.265-3.46c9.072-0.029,18.101,1.2,26.831,3.649c8.236,2.232,15.942,6.084,22.666,11.333\n  c6.615,5.292,11.929,12.031,15.527,19.693c3.867,7.989,5.801,17.534,5.794,28.634c0.123,7.604-0.553,15.2-2.028,22.667\n  c-1.018,5.189-2.763,10.213-5.176,14.924c-1.643,3.264-4.049,6.084-7.015,8.222c-2.138,1.541-4.682,2.42-7.313,2.515\n  c-2.348,0.08-4.638-0.756-6.382-2.326c-1.68-1.563-2.516-4.238-2.516-8.033V75.535c0-10.969-3.482-19.365-10.453-25.181\n  c-6.972-5.815-16.414-8.723-28.336-8.723c-4.595-0.043-9.174,0.327-13.703,1.12c-3.627,0.64-7.196,1.592-10.664,2.835\n  c-2.856,1.032-5.604,2.326-8.222,3.867c-2.181,1.28-4.26,2.741-6.193,4.369l8.724,12.59c3.365-2.326,6.935-4.333,10.664-5.997\n  c4.252-1.956,10.046-2.937,17.366-2.937c7.029,0,12.612,1.52,16.749,4.558c4.136,3.039,6.2,7.814,6.193,14.328v3.453\n  c-2.305-0.276-5.38-0.538-9.239-0.821c-3.868-0.276-8.36-0.4-13.5-0.4c-13.434,0-23.684,3.075-30.764,9.232\n  c-7.08,6.15-10.635,14.314-10.664,24.476c-0.123,4.718,0.923,9.392,3.046,13.601c1.883,3.628,4.515,6.812,7.72,9.342\n  c3.075,2.42,6.586,4.209,10.352,5.277c3.563,1.047,7.255,1.6,10.97,1.621c5.976,0.007,11.915-0.88,17.628-2.632\n  c5.678-1.767,11.29-5.415,16.851-10.97c0.676,2.45,1.854,4.732,3.46,6.703c1.433,1.715,3.191,3.133,5.176,4.165\n  c1.992,1.018,4.107,1.767,6.296,2.231c2.166,0.473,4.376,0.713,6.601,0.72c10.388-0.269,20.136-5.052,26.692-13.106\n  c4.13-4.791,7.619-11.26,10.461-19.395c2.843-8.135,4.268-18.421,4.268-30.866c0-13.128-2.239-24.636-6.71-34.515\n  c-4.18-9.508-10.461-17.948-18.37-24.679c-8.142-6.753-17.563-11.791-27.703-14.822c-11.194-3.388-22.833-5.06-34.529-4.972\n  C79.894-0.118,68.837,1.562,58.26,4.979C23.883,16.486,11.038,41.5,7.309,50.15C2.431,61.417-0.004,74.619,0.003,89.753\n  c-0.058,7.524,0.785,15.026,2.516,22.354c1.512,6.419,3.678,12.663,6.462,18.639c2.392,5.168,5.351,10.054,8.818,14.567\n  c0.916,1.171,1.824,2.283,2.733,3.315h-0.139c2.079,2.472,4.369,4.769,6.841,6.848l0,0c20.26,19.947,48.043,28.961,72.155,28.634\n  c39.363-0.494,76.488-17.767,93.411-50.987c6.296-11.914,9.269-25.799,9.596-41.552L202.426,91.498z M112.911,105.783\n  c0,2.856-0.771,5.663-2.232,8.12c-1.526,2.609-3.525,4.914-5.896,6.797c-2.515,2.006-5.372,3.555-8.425,4.572\n  c-3.17,1.083-6.499,1.628-9.85,1.621c-6.376,0-11.282-1.353-14.735-4.057c-3.431-2.668-5.357-6.826-5.176-11.173\n  c0.021-2.145,0.399-4.274,1.119-6.296c0.808-2.268,2.123-4.317,3.854-5.996c2.188-2.043,4.783-3.605,7.618-4.573\n  c3.925-1.323,8.047-1.94,12.19-1.824c5.678,0,10.345,0.167,14.001,0.501c3.663,0.342,6.157,0.654,7.553,0.916L112.911,105.783z", 1, "st-0", "path"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rect", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'epic-loading',
                templateUrl: './loading.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/loading/loading.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/loading/loading.service.ts ***!
  \***************************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.component */ "./src/app/shared/loading/loading.component.ts");



class LoadingService {
    constructor(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    startLoadingBar() {
        const loader = document.createElement('div');
        loader.classList.add('progress');
        document.body.appendChild(loader);
        const bar = document.createElement('div');
        bar.classList.add('indeterminate');
        loader.appendChild(bar);
    }
    stopLoadingBar() {
        document.querySelector(`.progress`).remove();
    }
    startLocalLoading(seletor) {
        const elemento = document.querySelector(`${seletor}`);
        const positionElemento = getComputedStyle(elemento).position;
        if (positionElemento === ('static' || false)) {
            elemento.style.position = 'relative';
        }
        const loader = document.createElement('div');
        loader.classList.add('loader');
        elemento.appendChild(loader);
        const spinner = document.createElement('div');
        spinner.classList.add('spinner');
        loader.appendChild(spinner);
    }
    stopLocalLoading(seletor) {
        const elemento = document.querySelector(`${seletor}`);
        if (elemento) {
            if (elemento.style.position === 'relative') {
                elemento.style.position = 'static';
            }
        }
        if (document.querySelector(`${seletor} .loader`)) {
            document.querySelector(`${seletor} .loader`).remove();
        }
    }
    appendComponentToBody(component) {
        // Create a component reference from the component
        component = _loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"];
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);
        // Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(componentRef.hostView);
        // Get DOM element from component
        const domElem = componentRef.hostView
            .rootNodes[0];
        // Append DOM element to the body
        document.body.appendChild(domElem);
        // Wait some time and remove it from the component tree and from the DOM
        setTimeout(() => {
            this.appRef.detachView(componentRef.hostView);
            componentRef.destroy();
        }, 3000);
    }
}
LoadingService.ɵfac = function LoadingService_Factory(t) { return new (t || LoadingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
LoadingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoadingService, factory: LoadingService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/rules/rules.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/rules/rules.component.ts ***!
  \*************************************************/
/*! exports provided: RulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesComponent", function() { return RulesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RulesComponent {
    constructor() { }
    closeRules() {
        document.querySelector('#rules').classList.remove('showModal');
    }
}
RulesComponent.ɵfac = function RulesComponent_Factory(t) { return new (t || RulesComponent)(); };
RulesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RulesComponent, selectors: [["rules"]], decls: 5, vars: 0, consts: [["id", "rules", 1, "hideModal"], [3, "click"], [1, "material-icons"], ["src", "assets/tormenta20-v0.7.pdf", 2, "width", "90vw", "height", "90vh"]], template: function RulesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RulesComponent_Template_button_click_1_listener() { return ctx.closeRules(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "iframe", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["div[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  bottom: 0px;\n  right: 0px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n  background: rgba(0, 0, 0, 0.6);\n}\ndiv[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: 40px;\n  width: 40px;\n  background-color: #fafafa;\n  position: absolute;\n  top: 2vh;\n  right: 3vw;\n  cursor: pointer;\n}\ndiv[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  border: 2px solid #000;\n  border-radius: 4px;\n}\n.hideModal[_ngcontent-%COMP%] {\n  z-index: -1;\n  opacity: 0;\n  -webkit-animation: hide 0.25s;\n          animation: hide 0.25s;\n  transform: scale(0);\n}\n@-webkit-keyframes hide {\n  from {\n    z-index: 2;\n    transform: scale(1);\n    opacity: 1;\n  }\n  to {\n    z-index: -1;\n    transform: scale(0);\n    opacity: 0;\n  }\n}\n@keyframes hide {\n  from {\n    z-index: 2;\n    transform: scale(1);\n    opacity: 1;\n  }\n  to {\n    z-index: -1;\n    transform: scale(0);\n    opacity: 0;\n  }\n}\n.showModal[_ngcontent-%COMP%] {\n  opacity: 1;\n  z-index: 2;\n  -webkit-animation: show 0.2s;\n          animation: show 0.2s;\n  transform: scale(1);\n}\n@-webkit-keyframes show {\n  from {\n    transform: scale(0);\n    opacity: 0;\n    z-index: -1;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n    z-index: 2;\n  }\n}\n@keyframes show {\n  from {\n    transform: scale(0);\n    opacity: 0;\n    z-index: -1;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n    z-index: 2;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21icmF6L0RvY3VtZW50cy9lcGljLXF1ZXN0LXJwZy9lcGljLXF1ZXN0LXJwZy9zcmMvYXBwL3NoYXJlZC9ydWxlcy9ydWxlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3J1bGVzL3J1bGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQ0ZGO0FESUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0ZKO0FES0U7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0FDSEo7QURPQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtFQUVBLG1CQUFBO0FDTEY7QURPQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtFQ0pGO0VETUE7SUFDRSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0VDSkY7QUFDRjtBRE5BO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0VDSkY7RURNQTtJQUNFLFdBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7RUNKRjtBQUNGO0FETUE7RUFDRSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO1VBQUEsb0JBQUE7RUFFQSxtQkFBQTtBQ0xGO0FET0E7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7RUNKRjtFRE1BO0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtFQ0pGO0FBQ0Y7QUROQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtFQ0pGO0VETUE7SUFDRSxtQkFBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0VDSkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9ydWxlcy9ydWxlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcbn1cblxuZGl2IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBib3R0b206IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG5cbiAgYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMnZoO1xuICAgIHJpZ2h0OiAzdnc7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgaWZyYW1lIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxufVxuXG4uaGlkZU1vZGFsIHtcbiAgei1pbmRleDogLTE7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogaGlkZSAwLjI1cztcblxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuQGtleWZyYW1lcyBoaWRlIHtcbiAgZnJvbSB7XG4gICAgei1pbmRleDogMjtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgdG8ge1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuLnNob3dNb2RhbCB7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDI7XG4gIGFuaW1hdGlvbjogc2hvdyAwLjJzO1xuXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5Aa2V5ZnJhbWVzIHNob3cge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgei1pbmRleDogLTE7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgICB6LWluZGV4OiAyO1xuICB9XG59XG4iLCJkaXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICByaWdodDogMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogMTA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cbmRpdiBidXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAydmg7XG4gIHJpZ2h0OiAzdnc7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmRpdiBpZnJhbWUge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5oaWRlTW9kYWwge1xuICB6LWluZGV4OiAtMTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBoaWRlIDAuMjVzO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuXG5Aa2V5ZnJhbWVzIGhpZGUge1xuICBmcm9tIHtcbiAgICB6LWluZGV4OiAyO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICB0byB7XG4gICAgei1pbmRleDogLTE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4uc2hvd01vZGFsIHtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMjtcbiAgYW5pbWF0aW9uOiBzaG93IDAuMnM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbkBrZXlmcmFtZXMgc2hvdyB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgb3BhY2l0eTogMDtcbiAgICB6LWluZGV4OiAtMTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHotaW5kZXg6IDI7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RulesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rules',
                templateUrl: './rules.component.html',
                styleUrls: ['./rules.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/mbraz/Documents/epic-quest-rpg/epic-quest-rpg/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map